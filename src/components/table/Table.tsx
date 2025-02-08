import { TableBody } from "./table-body/TableBody";
import { TableHeader } from "./table-head/TableHeader";


export const Table =()=>{
  return(
    <main className="content">
        <table>
          <TableHeader/>
          <TableBody/>
        </table>
      </main>
  );
}