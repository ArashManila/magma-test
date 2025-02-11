
type TableCellProps={
  data:string 
}
export const TableCell = ({data}:TableCellProps)=>{
  return(
    <td className="table__cell-container">
      <div className="table__cell">
        {data}
      </div>
    </td>
  );
}