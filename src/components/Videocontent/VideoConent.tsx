import { FC, useEffect } from "react";
import "./Videocontnet.scss";
import { useDispatch, useSelector } from "react-redux";
import { getRandomMovie } from "../../actions/MoviesActions";
import { RootState } from "../../store";
import { Link } from "react-router-dom";
const VideoConent: FC<{ type: string; setgenre: Function }> = ({
  type,
  setgenre,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomMovie(type));
  }, [type, dispatch]);
  const getrandom = useSelector((state: RootState) => state.getMovie);
  const { movie } = getrandom;
  if (movie && movie.length !== 0) {
    const videoo = movie[0];
    return (
      <div
        className="featuredvideo"
        style={{
          backgroundImage: `url(${movie[0].img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {type && (
          <div className="category">
            <span>
              {type === "/movies" || type === "/" ? "Movies" : "Series"}
            </span>
            <select
              name="genre"
              id="genre"
              onChange={(event: any) => {
                setgenre(event.target.value);
              }}
            >
              <option value="adventure">Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
              <option value="action">action</option>
            </select>
          </div>
        )}

        <div className="info">
          <img
            src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
            alt=""
          />
          <span className="title">
            {movie && movie.length !== 0 ? movie[0].title : ""}
          </span>
          <span className="desc">
            {movie && movie.length !== 0 && movie[0].desc}
          </span>

          <div className="buttons">
            <button className="play">
              <Link to={{ pathname: "/watchVideo", state: { videoo } }}>
                Play
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>no option</div>;
  }
};

export default VideoConent;
