
import {

    MailOutline,
    PermIdentity,


  } from "@material-ui/icons";

  import "./user.scss";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { getUser } from "../../../../actions/Useractions";
import { RootState } from "../../../../store";
function Userdetails() {
  const dispatch=useDispatch()
let {id}=useParams<{id:string}>()
  useEffect(()=>{
  dispatch(getUser(id))
  },[dispatch,id])
  const UserProfile=useSelector((state:RootState)=>state.UserProfile)
  const {userProfile}=UserProfile

    return (
        <div className="userShow">
         
        <div className="userShowTop">
          <img
            src={(userProfile?userProfile.profilePic:'')}
            alt=""
            className="userShowImg"
          />
          <div className="userShowTopTitle">
            <span className="userShowUsername">{userProfile&&userProfile.name}</span>
          </div>
        </div>
        <div className="userShowBottom">
          <span className="userShowTitle">Account Details</span>
          <div className="userShowInfo">
            <PermIdentity className="userShowIcon" />
            <span className="userShowInfoTitle">{userProfile&&userProfile.name}</span>
          </div>
          <div className="userShowInfo">
            <PermIdentity className="userShowIcon" />
            <span className="userShowInfoTitle">{userProfile&&userProfile.fullname}</span>
          </div>
          <span className="userShowTitle">Contact Details</span>
          
          <div className="userShowInfo">
            <MailOutline className="userShowIcon" />
            <span className="userShowInfoTitle">{userProfile&&userProfile.email}</span>
          </div>
        </div>
        <div className="userTitleContainer">
        <Link to={{pathname:`/adminPanel/newUser/${id}`,state:{userProfile}}} className="linkedit">

        <h1 className="userTitle">Edit User</h1>
        </Link>

         

          
        </div>
      </div>
    )
 
}

export default Userdetails
