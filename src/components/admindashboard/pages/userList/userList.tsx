import "./userList.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteuser, getNewUsers } from "../../../../actions/Useractions";
import { RootState } from "../../../../store";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Listoption from "../list/Listoption";


export default function UserList() {
  const dispatch=useDispatch()
useEffect(()=>{
dispatch(getNewUsers(false)) 
},[dispatch])
const activeusers=useSelector((state:RootState)=>state.NewUsers)
const {newusers}=activeusers

const handlechange=(id:string)=>{
  dispatch(deleteuser(id))
};
 

if (newusers&& newusers.length!==0){





  const columns = [

    {
      field: "user",
      headerName: "User",
      width: 500,
      renderCell: (params:any) => {
        return (
          <div className="userListUser">
            <Link to={`/adminPanel/user/${params.row._id}`} className='link'>
            <img className="userListImg" src={params.row.profilePic||""} alt="" />
            </Link>
   
            {params.row.name}
          </div>
        );
      }, 
    },
    { field: "email", headerName: "Email", width: 300 ,
  
    renderCell: (params:any) => {
      return (
        <>
           <div className="userListUser">
           {params.row.email}
           </div>
        
        </>
      );
    }
  },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params:any) => { 
        
        return (
          <>
            <Link to={"/adminPanel/newUser/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
       onClick={()=>{handlechange(params.row._id)}}
            />
          </>
        );
      },
    },
  ];















  return (
    <div className="userList">
        <Listoption title="All users" arrayoption={newusers} columns={columns} />
    </div>
  );
}
else {
  return (
    <div>
      no data
    </div>
  )
}
}