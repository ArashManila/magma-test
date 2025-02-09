import { useState } from "react";
import { TableBody } from "./table-body/TableBody";
import { TableHeader } from "./table-head/TableHeader";
import Modal from "../modal/Modal";


export const Table =()=>{
  const [activeErrorPanel,setActiveErrorPanel] = useState<boolean>(false);
  const [errorText,setErrorText] = useState<string>("");
  return(
    <main className="content">
      <table>
        <TableHeader/>
        <TableBody setErrorText={setErrorText} setActiveErrorPanel={setActiveErrorPanel}/>
      </table>
      {activeErrorPanel && <Modal content={errorText} setActive={setActiveErrorPanel}/>}
    </main>
  );
}