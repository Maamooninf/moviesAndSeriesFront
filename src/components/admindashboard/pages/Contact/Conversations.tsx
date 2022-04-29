import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConversations } from "../../../../actions/MessagingAction";
import { RootState } from "../../../../store";
import "./Contactstyle.scss";

const Conversations: React.FC<{ setId: Function }> = ({ setId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConversations());
  }, [dispatch]);

  const userInfo = useSelector((state: RootState) => state.userSign);
  const { userInfoSign } = userInfo;
  const conversations = useSelector(
    (state: RootState) => state.Messagingreducer
  );
  const { Conversations } = conversations;
  return (
    <div className="coversation">
      {Conversations?.length !== 0 &&
        Conversations?.map((el: any) => {
          return (
            el?.users?.length !== 0 &&
            el.users?.map((user: any) => {
              if (user?._id !== userInfoSign?._id) {
                return (
                  <div
                    key={el?._id}
                    className="chatHistory"
                    onClick={() => {
                      setId(el);
                    }}
                  >
                    <img
                      src={user.profilePic}
                      alt="user"
                      className="converPic"
                    />
                    <div className="converDet">
                      <p>{user?.name}</p>

                      <p style={{ fontSize: "1rem" }}>
                        {el?.lastmessage?.substr(0, 5)}..
                      </p>
                    </div>
                  </div>
                );
              } else return null;
            })
          );
        })}
    </div>
  );
};

export default Conversations;
