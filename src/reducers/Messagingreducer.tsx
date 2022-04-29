import { ActionMessaging } from "../actions/actioninterfaces/Messaginginter";

const Messagingreducer = (
  state: {
    Conversations: Array<Object>;
    conversationload: boolean;
    messagesload: boolean;
    messagecreatload: boolean;
    errorcreatmessage: Object;
    errorGet: Object;
    errorGetmessages: Object;
    Messages: Array<Object>;
  } = {
    conversationload: false,
    messagesload: false,
    messagecreatload: false,
    Conversations: [],
    Messages: [],
    errorGet: {},
    errorGetmessages: {},
    errorcreatmessage: {},
  },
  action: ActionMessaging
) => {
  switch (action.type) {
    case "REQUEST_GET_CONVERSATION":
      return { ...state, conversationload: true };
    case "SUCCESS_GET_CONVERSATION":
      return {
        ...state,
        conversationload: false,
        Conversations: action.payload,
        errorGet: {},
      };
    case "FAILED_GET_CONVERSATION":
      return {
        ...state,
        conversationload: false,
        errorGet: action.payload,
        Conversations: [],
      };

    case "REQUEST_GET_MESSAGES":
      return {
        ...state,
        messagesload: true,
      };
    case "SUCCESS_GET_MESSAGES":
      return {
        ...state,
        messagesload: false,
        Messages: action.payload,
        errorGetmessages: {},
      };
    case "FAILED_GET_MESSAGES":
      return {
        ...state,
        messagesload: false,
        errorGetmessages: action.payload,
        Messages: [],
      };

    case "REQUEST_CREAT_MESSAGE":
      return { ...state, messagecreatload: true };

    case "SUCCESS_CREAT_MESSAGE":
      return {
        ...state,
        messagecreatload: false,
        errorcreatmessage: {},
        Messages: [...state.Messages, action.payload],
      };

    case "FAILED_CREAT_MESSAGE":
      return {
        ...state,
        messagecreatload: false,
        errorcreatmessage: action.payload,
      };
    case "REQUEST_CREATE_CONVERSATION":
      return { ...state, conversationload: true };

    case "SUCCESS_CREATE_CONVERSATION":
      return {
        ...state,
        conversationload: false,
        Conversations: [...state.Conversations, action.payload],
        errorGet: {},
      };
    case "FAILED_CREATE_CONVERSATION":
      return {
        ...state,
        conversationload: false,
        errorGet: action.payload,
      };

    default: {
      return state;
    }
  }
};
export { Messagingreducer };
