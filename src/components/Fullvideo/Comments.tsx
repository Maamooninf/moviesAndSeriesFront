import React, { useState } from "react";
import { Addreply } from "../../actions/MoviesActions";
import { useDispatch } from "react-redux";
import { AiOutlineSend } from "react-icons/ai";

const CommentItem: React.FC<{ item: any; movieId: string }> = ({
  item,
  movieId,
}) => {
  const dispatch = useDispatch();
  const [text, settext] = useState("");
  const [show, setshow] = useState(false);
  const [showChild, setshowChild] = useState(false);

  const replies = () => {
    setshow(true);
  };
  const handletext = (e: any) => {
    settext(e.target.value);
  };
  const handlesubmit = (id: string) => {
    dispatch(Addreply(id, movieId, text));
  };
  let children = null;
  if (item.comments && item.comments.length) {
    children = (
      <ul>
        {item.comments.map((i: any) => (
          <CommentItem item={i} key={i._id} movieId={movieId} />
        ))}
      </ul>
    );
  }
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {item.content && (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "5px",
              position: "relative",
            }}
          >
            <img
              style={{
                objectFit: "cover",

                width: "60px",
                height: "60px",
                margin: "5px",
                borderRadius: "100%",
              }}
              src={item.author.profilePic}
              alt=""
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgba(194, 201, 228, 0.712)",
                marginLeft: "20px",
                padding: "15px",
                borderRadius: "10px",
                width: "100%",
              }}
            >
              <p> {item.author.name}</p>
              <p> {item.content}</p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <p style={{ margin: "10px" }}>like </p>
            <p style={{ margin: "10px" }}> comment </p>
            <p
              style={{ margin: "10px", cursor: "pointer" }}
              onClick={() => {
                replies();
              }}
            >
              {" "}
              reply{" "}
            </p>
          </div>
          {show && (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="text"
                onChange={(e) => handletext(e)}
                style={{
                  border: 0,
                  borderBottom: "1px solid red",
                  width: "260px",
                  marginBottom: "10px",
                }}
              />

              <AiOutlineSend onClick={() => handlesubmit(item._id)} />
            </div>
          )}
        </div>
      )}
      <div
        onClick={() => {
          setshowChild(!showChild);
        }}
      >
        view comments {item.comments && item.comments.length}
      </div>
      <div
        style={{
          width: "100%",
          transition: "all 0.5s ease-in-out",
          transform: showChild ? "translateY(0%)" : "translateY(-50%)",
        }}
      >
        {showChild && children}
      </div>
    </li>
  );
};
export default CommentItem;
