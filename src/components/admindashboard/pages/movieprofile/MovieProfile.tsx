import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getRandomMovie } from "../../../../actions/MoviesActions";
import { RootState } from "../../../../store";
import "./MovieProf.scss";

function MovieProfile() {
  let { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomMovie("none", id));
  }, [dispatch, id]);
  const getrandom = useSelector((state: RootState) => state.getMovie);
  const { movie } = getrandom;
  if (movie && movie.length !== 0) {
    return (
      <div className="movieProfile">
        <div className="moviecontentProfile">
          <table>
            <tbody>
              <tr>
                <td>Title</td>
                <td>{movie[0].title}</td>
              </tr>
              <tr>
                <td>description</td>
                <td>{movie[0].desc} </td>
              </tr>
              <tr>
                <td>genre</td>
                <td>{movie[0].genre} </td>
              </tr>
              <tr>
                <td>Limit</td>
                <td>{movie[0].limit} </td>
              </tr>
              <tr>
                <td>type</td>
                <td>{movie[0].isSeries ? "Series" : "Movie"} </td>
              </tr>
            </tbody>
          </table>
          <div className="movieVideost">
            <div>Trialer</div>
            <video src={movie[0].trailer} controls autoPlay={false} loop />{" "}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>no info</div>;
  }
}

export default MovieProfile;
