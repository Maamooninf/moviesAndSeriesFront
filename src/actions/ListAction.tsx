import axios from "axios";
import { Dispatch } from "redux";
import { ActionList } from "./actioninterfaces/ListActioninter";
import { RootState } from "../store";
const getList =
  (type: any, genre: any) =>
  async (dispatch: Dispatch<ActionList>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfoSign },
      } = getState();
      dispatch({ type: "REQUEST_GET_LIST" });
      if (type !== "none") {
        type = type === "/" ? "movie" : "series";
        const { data } = await axios.get(
          `http://localhost:5000/list/getAll?type=${type}&genre=${genre}`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: userInfoSign && userInfoSign.token,
            },
          }
        );
        dispatch({ type: "SUCCESS_GET_LIST", payload: data });
      } else {
        const { data } = await axios.get(`http://localhost:5000/list/getAll`, {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfoSign && userInfoSign.token,
          },
        });
        dispatch({ type: "SUCCESS_GET_LIST", payload: data });
      }
    } catch (error: any) {
      if (error.response) {
        dispatch({ type: "FAILED_GET_LIST", payload: error.response.data.msg });
      } else {
        dispatch({ type: "FAILED_GET_LIST", payload: error.message });
      }
    }
  };
const creatListMovies =
  (Listbody: any) =>
  async (dispatch: Dispatch<ActionList>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfoSign },
      } = getState();
      dispatch({ type: "REQUEST_CRATE_LIST" });
      const { data } = await axios.post(
        `http://localhost:5000/list/creat`,
        Listbody,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfoSign && userInfoSign.token,
          },
        }
      );
      dispatch({ type: "SUCCESS_CRATE_LIST", payload: data });
    } catch (error: any) {
      if (error.response) {
        dispatch({
          type: "FAILED_CRATE_LIST",
          payload: error.response.data.msg,
        });
      } else {
        dispatch({ type: "FAILED_CRATE_LIST", payload: error.message });
      }
    }
  };

const deleteListMovies =
  (id: string) =>
  async (dispatch: Dispatch<ActionList>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfoSign },
      } = getState();
      dispatch({ type: "REQUEST_DELETE_LIST" });
      await axios.delete(`http://localhost:5000/list/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: userInfoSign && userInfoSign.token,
        },
      });
      dispatch({ type: "SUCCESS_DELETE_LIST", payload: id });
    } catch (error: any) {
      if (error.response) {
        dispatch({
          type: "FALIED_DELETE_LIST",
          payload: error.response.data.msg,
        });
      } else {
        dispatch({ type: "FALIED_DELETE_LIST", payload: error.message });
      }
    }
  };
export { getList, creatListMovies, deleteListMovies };
