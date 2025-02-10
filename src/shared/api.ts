import { Projects } from "../components/types/types"



export const api={
  getProjects: async ():Promise<Projects>=>{
    const response = await fetch('/projects.json').then(((res:Response):Promise<Projects>=>res.json()))
    return response
  }
}