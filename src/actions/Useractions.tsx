import Cookie from "js-cookie";
import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "./actioninterfaces/Actioninterfaces";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../store";
import { info } from "../components/admindashboard/pages/userprofile/UserRecords";

const signinn =
  (password: string, email: string) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: "REQUEST_SIGN" });
      const { data } = await axios.post("http://localhost:5000/user/signin", {
        password,
        email,
      });
      dispatch({ type: "SUCCESS_SIGN", payload: data });
      Cookie.set("userInfoSign", JSON.stringify(data));
    } catch (error: any) {
      if (error.response) {
        dispatch({ type: "FAILED_SIGN", payload: error.response.data.msg });
      } else {
        dispatch({ type: "FAILED_SIGN", payload: error.message });
      }
    }
  };

const rigister =
  (name: string, password: string, email: string, confirmpass: string) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: "REQUEST_RIGISTER" });

      const { data } = await axios.post("http://localhost:5000/user/signup", {
        name,
        password,
        email,
        confirmpass,
      });
      dispatch({ type: "SUCCESS_RIGISTER", payload: data });
      toast.success("SUCCESS_RIGISTER", { position: toast.POSITION.TOP_LEFT });
    } catch (err: any) {
      if (err.response) {
        toast.error("FAILED_RIGISTER", { position: toast.POSITION.TOP_LEFT });
        dispatch({ type: "FAILED_RIGISTER", payload: err.response.data });
      } else {
        toast.error("FAILED_RIGISTER", { position: toast.POSITION.TOP_LEFT });
        dispatch({ type: "FAILED_RIGISTER", payload: err });
      }
    }
  };

const signout = () => (dispatch: Dispatch<Action>) => {
  dispatch({ type: "REQUEST_SIGN" });
  dispatch({ type: "SUCCESS_SIGNOUT" });
};

const GetActiveUsers =
  () => async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      dispatch({ type: "REQUEST_ACTIVE_USERS" });
      const {
        userSign: { userInfoSign },
      } = getState();
      const { data } = await axios.get<{ _id: number; total: number }[]>(
        `http://localhost:5000/user/stats`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfoSign && userInfoSign.token,
          },
        }
      );
      const statsList: { _id: number; total: number }[] = data.sort(function (
        a: any,
        b: any
      ) {
        return a._id - b._id;
      });
      const month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const arr = [];
      for (var i = 0; i < statsList.length; i++) {
        arr.push({
          name: month[statsList[i]._id - 1],
          "Active User": data[i].total,
        });
      }
      dispatch({ type: "SUCCESS_ACTIVE_USERS", payload: arr });
    } catch (err) {
      dispatch({ type: "FAILED_ACTIVE_USERS", payload: err });
    }
  };

const getNewUsers =
  (all?: boolean) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfoSign },
      } = getState();
      dispatch({ type: "REQUEST_NEW_USERS" });
      var res: any;
      if (all === true) {
        res = await axios.get(`http://localhost:5000/user/all?new=${true}`, {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfoSign && userInfoSign.token,
          },
        });
      } else {
        res = await axios.get(`http://localhost:5000/user/all?new=${false}`, {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfoSign && userInfoSign.token,
          },
        });
      }
      dispatch({ type: "SUCCESS_NEW_USERS", payload: res.data });
    } catch (err) {
      dispatch({ type: "FAILED_NEW_USERS", payload: err });
    }
  };

const getUser =
  (id: string) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      dispatch({ type: "REQUEST_GET_USER" });
      const {
        userSign: { userInfoSign },
      } = getState();
      const { data } = await axios.get(
        `http://localhost:5000/user/find/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfoSign && userInfoSign.token,
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_USER", payload: data });
    } catch (err) {
      dispatch({ type: "FAILED_GET_USER", payload: err });
    }
  };

const updateUser =
  (id: string, userbody: info) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    //REQUEST_UPDATR_USER
    try {
      dispatch({ type: "REQUEST_UPDATR_USER" });
      const {
        userSign: { userInfoSign },
      } = getState();

      const { data } = await axios.put(
        `http://localhost:5000/user/update/${id}`,
        userbody,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfoSign && userInfoSign.token,
          },
        }
      );
      dispatch({
        type: "SUCCESS_UPDATR_USER",
        payload: data,
        current: userInfoSign._id,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({ type: "FAILED_UPDATR_USER", payload: err.response.data });
      } else {
        dispatch({ type: "FAILED_UPDATR_USER", payload: err });
      }
    }
  };
const deleteuser =
  (id: string) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      dispatch({ type: "REQUEST_DELETE_USER" });
      const {
        userSign: { userInfoSign },
      } = getState();
      await axios.delete(`http://localhost:5000/user/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: userInfoSign && userInfoSign.token,
        },
      });
      dispatch({ type: "SUCCESS_DELETE_USER", payload: id });
    } catch (err) {
      dispatch({ type: "FAILED_DELETE_USER", payload: err });
    }
  };

const getAdmins =
  (onlin: Array<Object>) =>
  async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      dispatch({ type: "REQUEST_NEW_USERS" });
      const {
        userSign: { userInfoSign },
      } = getState();
      const { data } = await axios.get<Array<Object>>(
        `http://localhost:5000/user/getadmins`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfoSign && userInfoSign.token,
          },
        }
      );
      if (data?.length !== 0) {
        let arr = data.filter(function (admin: any) {
          let ob = onlin?.find(function (elem: any) {
            if (elem?.userId === admin?._id) return true;
            else return false;
          });

          if (ob) {
            return true;
          } else return false;
        });
        dispatch({ type: "SUCCESS_NEW_USERS", payload: arr });
      } else {
        dispatch({
          type: "FAILED_NEW_USERS",
          payload: "i dont know but it is an error",
        });
      }
    } catch (err) {
      dispatch({ type: "FAILED_NEW_USERS", payload: err });
    }
  };

export {
  signinn,
  rigister,
  signout,
  GetActiveUsers,
  getNewUsers,
  getUser,
  updateUser,
  deleteuser,
  getAdmins,
};
