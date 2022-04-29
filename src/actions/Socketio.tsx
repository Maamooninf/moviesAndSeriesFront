import { Dispatch } from "redux"

        export const socketioappend =(io:any)=>(dispatch:Dispatch<any>)=>{
            dispatch({type:"APPEND_SOCKET",payload:io})
   
  
                }
  