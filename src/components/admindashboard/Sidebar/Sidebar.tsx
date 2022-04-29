import "./Sidebar.scss";
import {
  LineStyle,
  PermIdentity,
  Storefront,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
//AiOutlineClose
export default function Sidebar() {
  const useSign = useSelector((state: RootState) => state.userSign);
  const { userInfoSign } = useSign;
  const [close, setclose] = useState(false);
  return (
    <div
      className="sidebar"
      style={{
        width: close ? "50px" : "250px",
        height: close ? "65px" : "100%",
      }}
      id="realParent"
    >
      <div className="sidebarWrapper" id="sonelem">
        <div className="sidebarMenu">
          <div className="sidebarHeader">
            {!close ? <h3 className="sidebarTitle">Dashboard</h3> : ""}

            <AiOutlineClose
              size={30}
              onClick={() => {
                setclose(!close);
              }}
              style={{ marginRight: close ? "auto" : "0", cursor: "pointer" }}
            />
          </div>

          <ul className="sidebarList">
            <Link to="/adminPanel" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                <p style={{ width: "100%" }}> Home</p>
              </li>
            </Link>
            <Link
              to={`/adminPanel/user/${userInfoSign ? userInfoSign._id : ""}`}
              className="link"
            >
              <li className="sidebarListItem">
                <PermIdentity
                  className="sidebarIcon"
                  style={{ fontSize: "1rem", color: "white" }}
                />
                <p style={{ width: "100%" }}>My profile</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          {!close ? <h3 className="sidebarTitle">Quick Menu</h3> : ""}

          <ul className="sidebarList">
            <Link to="/adminPanel/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                <p style={{ width: "100%" }}>Users</p>
              </li>
            </Link>
            <Link to="/adminPanel/movies" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                <p style={{ width: "100%" }}> Movies</p>
              </li>
            </Link>
            <Link to="/adminPanel/lists" className="link">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                <p style={{ width: "100%" }}>List of movies</p>
              </li>
            </Link>

            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              <p style={{ width: "100%" }}> Reports</p>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          {!close ? <h3 className="sidebarTitle">Notifications Menu</h3> : ""}

          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              <p style={{ width: "100%" }}>Mail</p>
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              <p style={{ width: "100%" }}>Feedback</p>
            </li>
            <Link to="/adminPanel/contactUs" className="link">
              <li className="sidebarListItem">
                <ChatBubbleOutline className="sidebarIcon" />
                <p style={{ width: "100%" }}> Messages</p>
              </li>
            </Link>
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          {!close ? <h3 className="sidebarTitle">Staff</h3> : ""}
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              <p style={{ width: "100%" }}>Manage</p>
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              <p style={{ width: "100%" }}>Analytics</p>
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              <p style={{ width: "100%" }}> Reports</p>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
