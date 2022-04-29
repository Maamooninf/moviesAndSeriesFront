
import "./user.scss";
import Userdetails from "./Userdetails";
  
  export default function User() {
    return (
      <div className="user">
        <div className="userTitleContainer">

        <h1 className="userTitle">User Profile</h1>


         

          
        </div>
        <div className="userContainer">
        <Userdetails/>
     
        </div>
      
      </div>
    );
  }