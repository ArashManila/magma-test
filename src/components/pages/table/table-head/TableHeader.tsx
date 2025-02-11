import { useEffect, useRef, useState } from "react";
import utiles from "../../../utiles/utiles";

interface Category {
  title: string;
  id: string;
}

export const TableHeader = () => {
  const categories: Category[] = [
    { title: "Проект", id: utiles.makeid(5) },
    { title: "Название", id: utiles.makeid(5) },
    { title: "ГИП", id: utiles.makeid(5) },
    { title: "Тип ОКС", id: utiles.makeid(5) },
    { title: "Объект строительства", id: utiles.makeid(5) },
    { title: "Дата завершения", id: utiles.makeid(5) },
  ];

  const [columnsWidth, setColumnsWidth] = useState<number[]>(
    categories.map(() => 150) 
  );

  const thRefs = useRef<(HTMLTableHeaderCellElement | null)[]>([]);

  useEffect(() => {
    const initialWidths = Array.from(thRefs.current).map(
      (th) => th?.offsetWidth ?? 150
    );
    setColumnsWidth(initialWidths);
  }, []);


  const handleMouseDown = (index: number, e: React.MouseEvent) => {
    let isResizing = false;
    const startX = e.clientX;
    const startWidth = columnsWidth[index];

    document.documentElement.style.cursor = "ew-resize";

    const onMouseMove = (e: MouseEvent) => {
      if (isResizing) {
        const dx = e.clientX - startX;
        let newWidth = startWidth + dx;

        const minWidth = 50;
        newWidth = Math.max(newWidth, minWidth);

        const totalWidth = columnsWidth.reduce((acc, width) => acc + width, 0);
        const tableWidth = document.body.offsetWidth;

        const maxWidth = tableWidth - (totalWidth - columnsWidth[index]);

        newWidth = Math.min(newWidth, maxWidth);

        setColumnsWidth((prevWidths) => {
          const newWidths = [...prevWidths];
          newWidths[index] = newWidth;
          return newWidths;
        });
      }
    };

    const onMouseUp = () => {
      isResizing = false;
      document.documentElement.style.cursor = "default";
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    isResizing = true;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <thead>
      <tr>
        {categories.map((category, index) => (
          <th
            key={category.id}
            className="table__header-cell"
            ref={(el) => {
              if (el) {
                thRefs.current[index] = el;
              }
            }}
            style={{ width: `${columnsWidth[index]}px`, position: "relative" }}
          >
            {category.title}
            <div
              className="resizer"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "5px",
                height: "100%",
                cursor: "ew-resize",
                backgroundColor: "#ddd",
              }}
              onMouseDown={(e) => handleMouseDown(index, e)}
            />
          </th>
        ))}
      </tr>
    </thead>
  );
};
