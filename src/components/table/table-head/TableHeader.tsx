import { useEffect, useRef, useState } from "react";
import utiles from "../../utiles/utiles";

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
    let startX = e.clientX;
    let startWidth = columnsWidth[index];

    document.documentElement.style.cursor = "ew-resize";

    const onMouseMove = (e: MouseEvent) => {
      if (isResizing && startWidth >= 100) {
        const dx = e.clientX - startX;
        const newWidth = startWidth + dx;

        const minWidth = 100;
        const clampedWidth = Math.max(newWidth, minWidth);

        setColumnsWidth((prevWidths) => {
          const newWidths = [...prevWidths];
          newWidths[index] = clampedWidth;
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
