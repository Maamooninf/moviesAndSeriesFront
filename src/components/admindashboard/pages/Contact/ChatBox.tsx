import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Contactstyle.scss";
import Messagebody from "./Messagebody";
import { CreatMessage, getMessages } from "../../../../actions/MessagingAction";
import { RootState } from "../../../../store";
import { AiOutlineSend } from "react-icons/ai";

const ChatBox: React.FC<{ converId: any }> = ({ converId }) => {
  const dispatch = useDispatch();
  const scroll = useRef<HTMLDivElement>(null);
  const type = useRef<HTMLTextAreaElement>(null);

  const [newmessage, setnewmessage] = useState({});

  useEffect(() => {
    if (converId._id !== "") {
      dispatch(getMessages(converId._id));
    }
  }, [converId, dispatch]);
  const conversations = useSelector(
    (state: RootState) => state.Messagingreducer
  );
  const { Messages } = conversations;
  useEffect(() => {
    scroll?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [Messages]);

  const getSocket = useSelector((state: RootState) => state.getSocket);

  const { socketio } = getSocket;

  const userInfo = useSelector((state: RootState) => state.userSign);

  const { userInfoSign } = userInfo;

  const [tex, settex] = useState("");

  useEffect(() => {
    socketio?.on("newMessage", (data: any) => {
      console.log(data);
      setnewmessage(data);
      // if (data?.conver) {
      //   dispatch(CreatMessage(" ", data, "set"));
      // }
    });
  }, [socketio]);

  useEffect(() => {
    converId &&
      Object.keys(converId).length !== 0 &&
      newmessage &&
      Object.keys(newmessage).length !== 0 &&
      dispatch(CreatMessage(" ", newmessage, "set"));
  }, [newmessage, dispatch, converId]);

  const handlechange = (e: any) => {
    settex(e?.target.value);
  };
  const handlecreat = () => {
    const reciver = converId?.users?.filter(
      (el: any) => el._id !== userInfoSign._id
    );
    dispatch(CreatMessage(converId, tex, reciver[0]?._id));
    settex("");
    if (type?.current) type.current.value = "";
  };
  return (
    <div className="chatbox">
      <div
        className="chatmessages"
        style={{
          overflowY:
            converId && Object.keys(converId).length !== 0
              ? "scroll"
              : "hidden",
        }}
      >
        {Messages?.map((msg: any) => {
          return (
            <div ref={scroll} key={msg._id}>
              <Messagebody
                own={msg.sender === userInfoSign._id}
                text={msg.text}
              />
            </div>
          );
        })}
      </div>
      <div className="chatsender">
        {converId && Object.keys(converId).length !== 0 && (
          <textarea
            ref={type}
            onChange={(e) => {
              handlechange(e);
            }}
            className="Messageinput"
          />
        )}
        {converId && Object.keys(converId).length !== 0 && tex?.length ? (
          <AiOutlineSend size={30} onClick={handlecreat} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ChatBox;
