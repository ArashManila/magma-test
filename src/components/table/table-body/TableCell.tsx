
type TableCellProps={
  data:string | undefined
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