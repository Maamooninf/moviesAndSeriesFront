import { useEffect, useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./NewMovie.scss";
import {
  createMovie,
  getRandomMovie,
  updateMovie,
} from "../../../../actions/MoviesActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../../../../store";
import ClipBoardFun from "./ClipBoardFun";

export interface movieinfo {
  desc: string;
  title: string;
  img: string;
  video: string;
  trailer: string;
  genre: string;
  year: string;
  limit: any;
  createdAt: string;
  updatedAt: string;
}

function Newmovie() {
  const getrandom = useSelector((state: RootState) => state.getMovie);

  const { movie } = getrandom;

  const [moviechange, setmovie] = useState<movieinfo>({
    desc: "",
    title: "",
    img: "",
    video: "",
    trailer: "",
    genre: "",
    year: "",
    limit: "",
    createdAt: "",
    updatedAt: "",
  });

  const [progress, setprog] = useState(0);

  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();

  useEffect((): any => {
    let m = true;
    if (m) {
      if (id) {
        dispatch(getRandomMovie("none", id));
      }
    }
    return () => {
      m = false;
    };
  }, [id, dispatch]);

  useEffect(() => {
    if (movie && movie.length !== 0 && movie[0] && id) {
      setmovie(movie[0]);
    }
  }, [movie, id]);

  const handletextchange = (e: any) => {
    setmovie((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlesubmit = () => {
    if (id) {
      dispatch(updateMovie(id, moviechange));
    } else {
      dispatch(createMovie(moviechange));
    }
  };

  return (
    <div className="MovieParent">
      <div>
        <h3>Create movie </h3>
      </div>
      <LinearProgress
        variant="determinate"
        value={progress}
        style={{ margin: "15px" }}
      />
      <div className="Moviecont">
        <div className="movieRecords">
          <div className="movieRecorditem">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={`${(moviechange && moviechange.title) || ""}`}
              className="movieinput"
              onChange={(e) => {
                handletextchange(e);
              }}
            />
          </div>

          <div className="movieRecorditem">
            <label>decription</label>

            <input
              type="text"
              name="desc"
              value={`${(moviechange && moviechange.desc) || ""}`}
              className="movieinput"
              onChange={(e) => {
                handletextchange(e);
              }}
            />
          </div>

          <div className="movieRecorditem">
            <label>genre</label>

            <input
              type="text"
              name="genre"
              value={moviechange?.genre}
              className="movieinput"
              onChange={(e) => {
                handletextchange(e);
              }}
            />
          </div>

          <div className="movieRecorditem">
            <label>year</label>

            <input
              type="text"
              className="movieinput"
              name="year"
              onChange={(e) => {
                handletextchange(e);
              }}
              value={moviechange?.year}
            />
          </div>

          <div className="movieRecorditem">
            <label>limit</label>

            <input
              type="text"
              className="movieinput"
              name="limit"
              value={moviechange?.limit}
              onChange={(e) => {
                handletextchange(e);
              }}
            />
          </div>
        </div>

        <div className="movieRecords">
          <div className="movieUploaded">
            {moviechange && moviechange.img && (
              <ClipBoardFun
                text={moviechange.img}
                setmovie={setmovie}
                setprog={setprog}
                name="img"
              />
            )}
          </div>

          <div className="movieUploaded">
            {moviechange && moviechange.video && (
              <ClipBoardFun
                text={moviechange.video}
                setmovie={setmovie}
                setprog={setprog}
                name="video"
              />
            )}
          </div>

          <div className="movieUploaded">
            {moviechange && moviechange.trailer && (
              <ClipBoardFun
                text={moviechange.trailer}
                name="trailer"
                setmovie={setmovie}
                setprog={setprog}
              />
            )}
          </div>

          <div className="movieUploaded">
            <button onClick={() => handlesubmit()} className="btncreate">
              {id ? "Edit" : "Create"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newmovie;
