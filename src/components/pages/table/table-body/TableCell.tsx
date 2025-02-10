
type TableCellProps={
  data:string 
}
export const TableCell = ({data}:TableCellProps)=>{
  return(
    <td>
      <div className="table__cell">
        {data}
      </div>
    </td>
  );
}