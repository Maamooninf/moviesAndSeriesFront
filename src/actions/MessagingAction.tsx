import { RootState } from "../store";
import axios from "axios";
import { Dispatch } from "redux";
import { ActionMessaging } from "./actioninterfaces/Messaginginter";
const getConversations =
  () =>
  async (dispatch: Dispatch<ActionMessaging>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfoSign },
      } = getState();

      dispatch({ type: "REQUEST_GET_CONVERSATION" });
      const { data } = await axios.get<{
        convens: Array<any>;
        messages: Array<any>;
      }>(`http://localhost:5000/conver/getAll`, {
        headers: {
          "Content-Type": "application/json",
          authorization: userInfoSign && userInfoSign.token,
        },
      });
      data.messages?.length !== 0 &&
        data.messages?.map((el: any, ind: number) => {
          data.convens[ind].lastmessage = el[0]?.text;
          return null;
        });

      dispatch({ type: "SUCCESS_GET_CONVERSATION", payload: data.convens });
    } catch (err: any) {
      dispatch({ type: "FAILED_GET_CONVERSATION", payload: err.message });
    }
  };

const getMessages =
  (convId: string) =>
  async (dispatch: Dispatch<ActionMessaging>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfoSign },
      } = getState();

      dispatch({ type: "REQUEST_GET_MESSAGES" });

      const { data } = await axios.get(
        `http://localhost:5000/message/${convId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfoSign && userInfoSign.token,
          },
        }
      );

      dispatch({ type: "SUCCESS_GET_MESSAGES", payload: data });
    } catch (err: any) {
      dispatch({ type: "FAILED_GET_MESSAGES", payload: err.message });
    }
  };

const CreatMessage =
  (convId: string, text: string | Object, reciver: string) =>
  async (dispatch: Dispatch<ActionMessaging>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfoSign },
      } = getState();
      if (reciver !== "set") {
        dispatch({ type: "REQUEST_CREAT_MESSAGE" });

        const { data } = await axios.post(
          `http://localhost:5000/message/create/${reciver}`,
          {
            text,
            sender: userInfoSign?._id,
            conver: convId,
          },
          {
            headers: {
              "Content-Type": "application/json",
              authorization: userInfoSign && userInfoSign.token,
            },
          }
        );
        dispatch({ type: "SUCCESS_CREAT_MESSAGE", payload: data });
      } else {
        console.log(text);
        dispatch({ type: "SUCCESS_CREAT_MESSAGE", payload: text });
      }
    } catch (err: any) {
      dispatch({ type: "FAILED_CREAT_MESSAGE", payload: err.message });
    }
  };

const CreatConversation =
  (reciver: string) =>
  async (dispatch: Dispatch<ActionMessaging>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfoSign },
      } = getState();
      dispatch({ type: "REQUEST_CREATE_CONVERSATION" });

      const { data } = await axios.post<{ saved: Object; alredy: boolean }>(
        `http://localhost:5000/conver/create`,
        {
          users: [reciver, userInfoSign._id],
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfoSign && userInfoSign.token,
          },
        }
      );
      if (data.alredy === false)
        dispatch({ type: "SUCCESS_CREATE_CONVERSATION", payload: data.saved });
    } catch (err: any) {
      dispatch({ type: "FAILED_CREATE_CONVERSATION", payload: err.message });
    }
  };

export { getConversations, getMessages, CreatMessage, CreatConversation };
