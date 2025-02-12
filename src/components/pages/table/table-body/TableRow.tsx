import { project } from "../../../types/types";
import utiles from "../../../utiles/utiles";
import { TableCell } from "./TableCell";

type tableRow = {
  index: string;
  item: project;
};
export const TableRow = ({ item, index }: tableRow) => {

  const getStringOrDefault = (value: string | undefined) => value ?? "";
  
  return (
    <tr className="table__row" key={index}>
      <TableCell data={getStringOrDefault(item.description)} />
      <TableCell data={getStringOrDefault(item.title)} />
      <TableCell data={getStringOrDefault(item.gip?.description)} />
      <TableCell data={getStringOrDefault(item.capitalConstructionType.description)} />
      <TableCell data={getStringOrDefault(item.projectType.description)} />
      <TableCell data={getStringOrDefault(utiles.convertDate(item.finishDate))} />
    </tr>
  );
};
