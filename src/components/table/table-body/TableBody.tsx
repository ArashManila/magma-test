import { useEffect, useState } from 'react';
import { TableRow } from './TableRow';

type tableBodyProps={
  setErrorText: React.Dispatch<React.SetStateAction<string>>;
  setActiveErrorPanel: React.Dispatch<React.SetStateAction<boolean>>
}
export const TableBody = ({setErrorText, setActiveErrorPanel}: tableBodyProps) => {
  const [proj,setActiveProj] = useState([])

  useEffect(() => {
    const fetchData = ()=>{
      try{
         fetch('/projects.json')
        .then((res) => {return res.json()}).catch(e => {setErrorText(e.message); setActiveErrorPanel(true)})
        .then((data) => setActiveProj(data))
      } catch(error){
        console.log(error);
      }
    }
    fetchData();
  },[])
  
  
  const filteredData = proj?.filter((item)=>item.sysId === 'PROJECT_DEF');

  

  return (
    <>
    <tbody>
      {filteredData ?
        filteredData.map((item,index)=>
          <TableRow key={index} index={index} item={item}/>
        )
        : 
        <>
        </>
      }
    </tbody>
    </>
  );
};