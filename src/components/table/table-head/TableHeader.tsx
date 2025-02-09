import { useEffect, useRef, useState } from "react";
import utiles from "../../utiles/utiles";

// Тип для категории столбца
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

  // Состояние для ширины колонок
  const [columnsWidth, setColumnsWidth] = useState<number[]>(
    categories.map(() => 150) // Изначальная ширина всех колонок
  );

  // Рефы для заголовков таблицы
  const thRefs = useRef<(HTMLTableHeaderCellElement | null)[]>([]);

  useEffect(() => {
    // Для инициализации можно установить начальные размеры на основе текущих размеров колонок
    const initialWidths = Array.from(thRefs.current).map(
      (th) => th?.offsetWidth ?? 150
    );
    setColumnsWidth(initialWidths);
  }, []);

  // Обработчик изменения ширины колонки
  const handleMouseDown = (index: number, e: React.MouseEvent) => {
    let isResizing = false;
    let startX = e.clientX;
    let startWidth = columnsWidth[index];

    document.documentElement.style.cursor = "ew-resize";

    const onMouseMove = (e: MouseEvent) => {
      if (isResizing) {
        const dx = e.clientX - startX;
        let newWidth = startWidth + dx;

        // Ограничение минимальной ширины
        const minWidth = 150;
        newWidth = Math.max(newWidth, minWidth);

        // Получаем текущую ширину таблицы и ширину всех колонок
        const totalWidth = columnsWidth.reduce((acc, width) => acc + width, 0);
        const tableWidth = document.body.offsetWidth;

        // Ограничение максимальной ширины: таблица не должна выходить за пределы экрана
        const maxWidth = tableWidth - (totalWidth - columnsWidth[index]);

        // Ограничиваем ширину колонки, чтобы не выходить за пределы экрана
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
            ref={(el) => {
              // Присваиваем элемент в массив рефов, проверяя на null
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
