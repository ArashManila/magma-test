import { Projects } from "../components/types/types"



export const api={
  getProjects: async ():Promise<Projects>=>{
    const response = await fetch('/projects.json')
    .then(((res:Response):Promise<Projects>=>{
      return res.json();
    }))
    .then((data:Projects):Projects=>{
      if(data.length === 0) throw new Error("Projects not found, object is empty");
      return data;
    });
    return response
  }
}