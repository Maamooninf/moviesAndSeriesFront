import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import ChatBox from "./ChatBox";
import "./Contactstyle.scss";
import Conversations from "./Conversations";
import OnlineUsers from "./OnlineUsers";
function Contact() {
  const [currentCovers, setconv] = useState({});
  const [onlineusers, setusers] = useState([{}]);

  const getSocket = useSelector((state: RootState) => state.getSocket);

  const { socketio } = getSocket;
  const userSign = useSelector((state: RootState) => state.userSign);
  const { userInfoSign } = userSign;
  useEffect(() => {
    let mount = true;
    if (userInfoSign && Object.keys(userInfoSign).length !== 0) {
      let id = userInfoSign._id;

      socketio?.emit("NewUser", id);
    }
    socketio?.on("OnlineUsers", (users: any) => {
      if (mount) setusers(users);
    });

    return () => {
      mount = false;
    };
  }, [socketio, userInfoSign]);
  return (
    <div className="ContactParnet">
      <Conversations setId={setconv} />
      <ChatBox converId={currentCovers} />
      <OnlineUsers users={onlineusers} />
    </div>
  );
}

export default Contact;
