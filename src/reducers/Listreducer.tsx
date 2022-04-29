import { ActionList } from "../actions/actioninterfaces/ListActioninter";
interface list {
  lists: any[];
}
const getLists = (state: list = { lists: [] }, action: ActionList) => {
  switch (action.type) {
    case "REQUEST_GET_LIST":
      return { ...state, loadlist: true };
    case "SUCCESS_GET_LIST":
      return {
        ...state,
        loadlist: false,
        lists: action.payload,
        errorList: {},
      };
    case "FAILED_GET_LIST":
      return {
        ...state,
        loadlist: false,
        errorList: action.payload,
        lists: [],
      };
    case "REQUEST_CRATE_LIST":
      return { ...state, loadcreatelist: true };
    case "SUCCESS_CRATE_LIST":
      return {
        ...state,
        loadcreatelist: false,
        lists: [...state.lists, action.payload],
        errcreatelist: {},
      };
    case "FAILED_CRATE_LIST":
      return { ...state, loadcreatelist: false, errcreatelist: action.payload };
    case "REQUEST_DELETE_LIST":
      return { ...state, loaddeletelist: true };
    case "SUCCESS_DELETE_LIST":
      return {
        ...state,
        loaddeletelist: false,
        lists: state.lists.filter((x: any) => x._id !== action.payload),
        errdeletelist: {},
      };
    case "FALIED_DELETE_LIST":
      return { ...state, loaddeletelist: false, errdeletelist: action.payload };

    default: {
      return state;
    }
  }
};
export { getLists };
