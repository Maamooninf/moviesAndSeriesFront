import axios from "axios";
import { Dispatch } from "redux";
import { ActionMovie } from "./actioninterfaces/MovieActioninter";
import { RootState } from "../store";
import { movieinfo } from "../components/admindashboard/pages/Newmovie/Newmovie";

const createMovie =
  (movie: movieinfo) =>
  async (dispatch: Dispatch<ActionMovie>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfoSign },
      } = getState();
      dispatch({ type: "REQUEST_CREATE_MOVIE" });
      const { data } = await axios.post(
        `http://localhost:5000/movie/create`,
        movie,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfoSign && userInfoSign.token,
          },
        }
      );
      dispatch({ type: "SUCCESS_CREATE_MOVIE", payload: data });
    } catch (err: any) {
      dispatch({ type: "FAILED_CREATE_MOVIE", payload: err.message });
    }
  };

const getRandomMovie =
  (type?: string, id?: string) =>
  async (dispatch: Dispatch<ActionMovie>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfoSign },
      } = getState();
      dispatch({ type: "REQUEST_RANDOM_MOVIE" });
      if (type === "none") {
        const { data } = await axios.get(
          `http://localhost:5000/movie/find/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: userInfoSign && userInfoSign.token,
            },
          }
        );
        dispatch({ type: "SUCCESS_RANDOM_MOVIE", payload: [data] });
      } else {
        type = type === "/" ? "movies" : "series";

        const { data } = await axios.get(
          `http://localhost:5000/movie/random?type=${type}`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: userInfoSign && userInfoSign.token,
            },
          }
        );
        dispatch({ type: "SUCCESS_RANDOM_MOVIE", payload: data });
      }
    } catch (error: any) {
      if (error.response) {
        dispatch({
          type: "FAILED_RANDOM_MOVIE",
          payload: error.response.data.msg,
        });
      } else {
        dispatch({ type: "FAILED_RANDOM_MOVIE", payload: error.message });
      }
    }
  };
const getMovies =
  () => async (dispatch: Dispatch<ActionMovie>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfoSign },
      } = getState();
      dispatch({ type: "REQUEST_GET_MOVIES" });
      const { data } = await axios.get(`http://localhost:5000/movie/findAll`, {
        headers: {
          "Content-Type": "application/json",
          authorization: userInfoSign && userInfoSign.token,
        },
      });
      dispatch({ type: "SUCCESS_GET_MOVIES", payload: data });
    } catch (error: any) {
      if (error.response) {
        dispatch({
          type: "FAILED_GET_MOVIES",
          payload: error.response.data.msg,
        });
      } else {
        dispatch({ type: "FAILED_GET_MOVIES", payload: error.message });
      }
    }
  };
const deleteMovie =
  (id: string) =>
  async (dispatch: Dispatch<ActionMovie>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfoSign },
      } = getState();
      dispatch({ type: "REQUEST_DELETE_MOVIES" });
      await axios.delete(`http://localhost:5000/movie/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: userInfoSign && userInfoSign.token,
        },
      });
      dispatch({ type: "SUCCESS_DELETE_MOVIES", payload: id });
    } catch (err: any) {
      dispatch({ type: "FAILED_DELETE_MOVIES", payload: err.message });
    }
  };

const updateMovie =
  (id: string, movie: any) =>
  async (dispatch: Dispatch<ActionMovie>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfoSign },
      } = getState();
      dispatch({ type: "REQUEST_UPDATE_RANDOM_MOVIE" });
      const { data } = await axios.put(
        `http://localhost:5000/movie/update/${id}`,
        movie,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfoSign && userInfoSign.token,
          },
        }
      );
      dispatch({ type: "SUCCESS_UPDATE_RANDOM_MOVIE", payload: data });
    } catch (err: any) {
      dispatch({ type: "FAILED_UPDATE_RANDOM_MOVIES", payload: err.message });
    }
  };

const likeMovie =
  (status: 1 | 2, id: string) =>
  async (dispatch: Dispatch<ActionMovie>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfoSign },
      } = getState();
      var info = userInfoSign ? userInfoSign.token : "#";
      dispatch({ type: "REQUEST_UPDATE_RANDOM_MOVIE" });
      console.log(id);

      if (status === 1) {
        const { data } = await axios.put(
          "http://localhost:5000/movie/like",
          { movieId: id },
          {
            headers: {
              "Content-Type": "application/json",
              authorization: info,
            },
          }
        );
        dispatch({ type: "SUCCESS_GET_MOVIE", payload: [data] });
      } else {
        const { data } = await axios.put(
          "http://localhost:5000/movie/unlike",
          { movieId: id },
          {
            headers: {
              "Content-Type": "application/json",
              authorization: info,
            },
          }
        );
        dispatch({ type: "SUCCESS_GET_MOVIE", payload: [data] });
      }
    } catch (err: any) {
      dispatch({ type: "FAILED_UPDATE_RANDOM_MOVIES", payload: err.message });
    }
  };
const Addreply =
  (commentId: string, MovieId: string, content: string) =>
  async (dispatch: Dispatch<ActionMovie>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfoSign },
      } = getState();
      var info = userInfoSign ? userInfoSign.token : "#";
      dispatch({ type: "REQUEST_UPDATE_RANDOM_MOVIE" });
      const { data } = await axios.post(
        `http://localhost:5000/movie/addreply/movie/${MovieId}/comment/${commentId}`,
        { content },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: info,
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_MOVIE", payload: [data] });
    } catch (err: any) {
      dispatch({ type: "FAILED_UPDATE_RANDOM_MOVIES", payload: err.message });
    }
  };

const getFullMovie =
  (id: string, con?: any) =>
  async (dispatch: Dispatch<ActionMovie>, getState: () => RootState) => {
    try {
      if (id !== "set") {
        const {
          userSign: { userInfoSign },
        } = getState();
        dispatch({ type: "REQUEST_RANDOM_MOVIE" });
        const { data } = await axios.get(
          `http://localhost:5000/movie/find/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: userInfoSign && userInfoSign.token,
            },
          }
        );
        dispatch({ type: "SUCCESS_GET_MOVIE", payload: [data] });
      } else {
        const {
          getMovie: { fullvideo },
        } = getState();
        if (
          fullvideo &&
          fullvideo.length !== 0 &&
          con._id == fullvideo[0]._id
        ) {
          dispatch({ type: "SUCCESS_GET_MOVIE", payload: [con] });
        }
      }
    } catch (err: any) {
      dispatch({ type: "FAILED_GET_MOVIE", payload: err.message });
    }
  };

export {
  getRandomMovie,
  getMovies,
  deleteMovie,
  createMovie,
  updateMovie,
  likeMovie,
  getFullMovie,
  Addreply,
};
