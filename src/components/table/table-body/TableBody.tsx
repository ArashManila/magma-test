import { useState } from 'react';
import data from '../../../data/projects.json';

export const TableBody = () => {
  const filteredData = data.filter((item)=>item.sysId === 'PROJECT_DEF');
  
  const [projectData,setProjectData] = useState(filteredData);



  return (
    <tbody>
      {
        projectData.map((item,index)=>
          <tr key={index}>
            <td><span>{item.description}</span></td>
            <td><span>{item.title}</span></td>
            <td><span>{item.gip?.description}</span></td>
            <td><span>{item.capitalConstructionType.description}</span></td>
            <td><span>{item.projectType.description}</span></td>
            <td><span>{item.finishDate}</span></td>
          </tr>
        )
      }
    </tbody>
  );
};