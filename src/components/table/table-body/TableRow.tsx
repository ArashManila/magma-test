import { TableCell } from "./TableCell";

type tableRow ={
  index:number,
  item: any
}
export const TableRow=({item,index}:tableRow)=>{
  return(
    <tr key={index}>
      <TableCell data={item.description}/>
      <TableCell data={item.title}/>
      <TableCell data={item.gip?.description}/>
      <TableCell data={item.capitalConstructionType.description}/>
      <TableCell data={item.projectType.description}/>
      <TableCell data={item.finishDate}/>
    </tr>
  );
}