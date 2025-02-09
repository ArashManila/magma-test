import { useState } from 'react';
import data from '../../../data/projects.json';
import { TableRow } from './TableRow';

export const TableBody = () => {
  const filteredData = data.filter((item)=>item.sysId === 'PROJECT_DEF');
  
  const [projectData,setProjectData] = useState(filteredData);



  return (
    <tbody>
      {
        projectData.map((item,index)=>
          <TableRow key={index} index={index} item={item}/>
        )
      }
    </tbody>
  );
};