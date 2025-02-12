import { project } from "../../../types/types";
import utiles from "../../../utiles/utiles";
import { TableCell } from "./TableCell";

type tableRow = {
  index: string;
  item: project;
};
export const TableRow = ({ item, index }: tableRow) => {
  
  return (
    <tr className="table__row" key={index}>
      <TableCell data={item.description} />
      <TableCell data={item.title} />
      <TableCell data={item.gip?.description} />
      <TableCell data={item.capitalConstructionType.description} />
      <TableCell data={item.projectType.description} />
      <TableCell data={utiles.convertDate(item.finishDate)} />
    </tr>
  );
};
