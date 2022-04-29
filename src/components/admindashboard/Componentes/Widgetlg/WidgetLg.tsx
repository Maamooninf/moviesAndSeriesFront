import "./Widgelg.scss";
import {FC, useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import { getNewUsers } from "../../../../actions/Useractions";
import { RootState } from "../../../../store";
import { Link } from "react-router-dom";

const WidgetLg:FC=()=> {
  const dispatch=useDispatch()


useEffect(()=>{


dispatch(getNewUsers())


},[dispatch])
const activeusers=useSelector((state:RootState)=>state.NewUsers)
const {newusers}=activeusers
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">New Users</h3>
      <table className="widgetLgTable">
          <tbody>
        
        <tr>
        <th>Customer</th>
        <th>More details</th>
        </tr>
      
     {
       newusers&&newusers.length!==0 && newusers.map((elt:any)=>{
   return (
     <tr key={elt._id}>
    <td>{elt.name}</td>
    <td>
     <button className="widgetLgButton Approved ">
       <Link to={{pathname:`/adminPanel/user/${elt._id}`,state:{elt}}}  className="navLinkuser">
       More details
         </Link>
     
      </button>
    </td>
     </tr>

   )
       })
     }
    
        </tbody>
      </table>
    </div>
  );
}
export default WidgetLg

  