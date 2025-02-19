import { project, Projects } from "../components/types/types"

const requiredFields: Array<keyof project> = [
  "$id", 
  "$type", 
  "title", 
  "identifier", 
  "startDate", 
  "projectsObject", 
  "code", 
  "projectType",
  "notation", 
  "createUser", 
  "createTime", 
  "modifyTime", 
  "guid", 
  "type", 
  "hasWorkflow", 
  "description", 
  "status", 
  "handle", 
  "sysId"
];

export const api={
  validateData:(data:project):void=>{
    requiredFields.forEach(field => {
      if (!(field in data)) {
        throw new Error(`Missing required field: ${field}`);
      }
    });
  },
  getProjects: async ():Promise<Projects>=>{
    const response = await fetch('/projects.json')
    .then(((res:Response):Promise<Projects>=>{
      return res.json();
    }))
    .then((data:Projects):Projects=>{
      if(data.length === 0) throw new Error("Projects not found, object is empty");
      data.forEach(project => api.validateData(project));
      return data;
    });
    return response
  }
}