import { useState } from "react";
import { Projects } from "../types/types";

export const useFetching = (callback:() =>Promise<Projects>) => {
  const [activeErrorPanel,setActiveErrorPanel] = useState<boolean>(false);
  const [errorText,setErrorText] = useState<string>("");
  const [loading,setLoading] = useState<boolean>(false);

  const fetching = async ()=>{
    try{
      setLoading(true);
      await callback();
    } catch(e){
      if(e instanceof Error){
        setErrorText(e.message); 
        setActiveErrorPanel(true)
      }
    }
    finally{
      setLoading(false);
    }
  }

  return [fetching,loading,errorText,activeErrorPanel,setActiveErrorPanel] as [typeof fetching,typeof loading,typeof errorText,typeof activeErrorPanel,typeof setActiveErrorPanel]
}