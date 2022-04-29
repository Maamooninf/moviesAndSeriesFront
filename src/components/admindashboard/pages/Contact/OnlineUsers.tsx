import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { getAdmins } from "../../../../actions/Useractions";
import { CreatConversation } from "../../../../actions/MessagingAction";
const OnlineUsers: React.FC<{ users: Array<Object> }> = ({ users }) => {
  const useradmins = useSelector((state: RootState) => state.NewUsers);
  const { newusers } = useradmins;

  const userInfo = useSelector((state: RootState) => state.userSign);
  const { userInfoSign } = userInfo;

  const dispatch = useDispatch();
  useEffect(() => {
    if (users?.length !== 0) dispatch(getAdmins(users));
  }, [users, dispatch]);

  const creatnewconver = (reciverId: string) => {
    console.log(reciverId + " " + userInfoSign._id);
    if (reciverId !== userInfoSign._id) {
      dispatch(CreatConversation(reciverId));
    }
  };

  return (
    <div className="coversation">
      {newusers?.length !== 0 &&
        newusers.map((val: any) => {
          return (
            <div className="chatHistory" key={val._id}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      borderRadius: "100%",
                      width: "10px",
                      height: "10px",
                      backgroundColor: "rgb(47, 170, 9)",
                    }}
                  ></div>
                  <img src={val.profilePic} className="converPic" alt="" />
                </div>
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  creatnewconver(val._id);
                }}
              >
                {val?.name}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default OnlineUsers;
