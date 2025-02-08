// import { useState } from "react"

// const base_url= './data/projects.json'

// const [state,setState]= useState<Array<object>>([])

// export const api ={

//   getAllProjects:()=>{
//     return fetch(base_url).then(response => response.json()).then((data)=>setState(data));
//   }
// }
import data from '../data/projects.json'

export const api ={
  validate:()=>{
    try{
      JSON.stringify(data);
    }catch(e){
      console.log(e);
    }
    finally{
      console.log(1);
      
    }
  }
}