import { project } from "../../../types/types";
import { TableCell } from "./TableCell";

type tableRow = {
  index: string;
  item: project;
};
export const TableRow = ({ item, index }: tableRow) => {
  const convertMonth = (m: number) => {
    const converted_m = m + 1;
    if (converted_m < 10) return `0${converted_m}`;
    else return converted_m.toString();
  };

  const convertDate = (date: string) => {
    const newDate = new Date(date);
    const combinedDate = `${newDate.getDate()}.${convertMonth(
      newDate.getMonth()
    )}.${newDate.getFullYear()}`;
    return combinedDate;
  };
  return (
    <tr key={index}>
      <TableCell data={item.description} />
      <TableCell data={item.title} />
      <TableCell data={item.gip?.description} />
      <TableCell data={item.capitalConstructionType.description} />
      <TableCell data={item.projectType.description} />
      <TableCell data={convertDate(item.finishDate)} />
    </tr>
  );
};
