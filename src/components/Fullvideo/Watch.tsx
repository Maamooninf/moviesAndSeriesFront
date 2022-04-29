import { ArrowBackOutlined } from "@material-ui/icons";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./watch.scss";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getFullMovie, likeMovie } from "../../actions/MoviesActions";
import { RootState } from "../../store";
import CommentItem from "./Comments";

function Watch() {
  const dispatch = useDispatch();
  const { state } = useLocation<any>();

  const getrandom = useSelector((state: RootState) => state.getMovie);

  const { fullvideo } = getrandom;

  const getSocket = useSelector((state: RootState) => state.getSocket);

  const { socketio } = getSocket;

  useEffect(() => {
    if (state && state.videoo) {
      dispatch(getFullMovie(state.videoo._id));
    }
  }, [state, dispatch]);

  useEffect(() => {
    if (socketio) {
      socketio.on("replyAdded", (msg: any) => {
        console.log(msg);
        dispatch(getFullMovie("set", msg));
      });
      return () => socketio.off("replyAdded");
    }
  }, [socketio, dispatch]);
  const useSign = useSelector((state: RootState) => state.userSign);
  const { userInfoSign } = useSign;
  const likemovie = (id: string) => {
    dispatch(likeMovie(1, id));
  };
  const unlikemovie = (id: string) => {
    dispatch(likeMovie(2, id));
  };

  if (fullvideo && fullvideo.length !== 0) {
    return (
      <div className="watch">
        <div className="back">
          <Link to={"/"} className="navlinkvideo">
            <ArrowBackOutlined />
            Home
          </Link>
        </div>
        <video className="video" autoPlay={true} controls>
          <source src={fullvideo[0].video} type="video/mp4"></source>
        </video>
        <div className="publishDetails">
          <div className="publisheritem">
            {userInfoSign &&
            fullvideo[0].likes.find(
              (ele: string) => ele === userInfoSign._id
            ) ? (
              <AiFillLike
                style={{ fontSize: "1.8rem", cursor: "pointer" }}
                onClick={() => unlikemovie(fullvideo[0]._id)}
              />
            ) : (
              <AiOutlineLike
                style={{ fontSize: "1.8rem", cursor: "pointer" }}
                onClick={() => likemovie(fullvideo[0]._id)}
              />
            )}

            {fullvideo[0].likes.length}
          </div>
          <div className="publisheritem">Save</div>
        </div>

        <div className="publishInfo">
          <div className="publisheritem">
            {fullvideo[0].title}

            <div className="publisherDescription">{fullvideo[0].desc}</div>
          </div>
        </div>

        <div className="publishInfo">
          <div>
            <CommentItem item={fullvideo[0]} movieId={fullvideo[0]._id} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>no info</div>;
  }
}
export default Watch;
