import Cookie from "js-cookie";
import { Action } from "../actions/actioninterfaces/Actioninterfaces";
interface State {
  userInfoSign: object;
  loadding: boolean;
  error: object;
}

const userSign = (
  state: State = { userInfoSign: {}, loadding: true, error: {} },
  action: Action
) => {
  switch (action.type) {
    case "REQUEST_SIGN":
      return { ...state, loadding: true };
    case "SUCCESS_SIGN":
      return {
        ...state,
        loadding: false,
        userInfoSign: action.payload,
        error: {},
      };
    case "SUCCESS_SIGNOUT":
      Cookie.remove("userInfoSign");
      // window.location.reload();
      return { ...state, loadding: false, userInfoSign: {} };
    case "FAILED_SIGN":
      return { ...state, loadding: false, error: action.payload };

    default: {
      return state;
    }
  }
};
const userRigister = (state = { err: {} }, action: Action) => {
  switch (action.type) {
    case "REQUEST_RIGISTER":
      return { ...state, looad: true };
    case "SUCCESS_RIGISTER":
      return { ...state, looad: false, userInfo: action.payload, err: {} };
    case "FAILED_RIGISTER":
      return { ...state, looad: false, err: action.payload };
    default: {
      return state;
    }
  }
};
const ActiveUsers = (state = { users: [] }, action: Action) => {
  switch (action.type) {
    case "REQUEST_ACTIVE_USERS":
      return { ...state, loooad: true };
    case "SUCCESS_ACTIVE_USERS":
      return {
        ...state,
        loooad: false,
        users: action.payload,
        errgetlatest: {},
      };

    case "FAILED_ACTIVE_USERS":
      return { ...state, loooad: false, errgetlatest: action.payload };
    default: {
      return state;
    }
  }
};
const NewUsers = (
  state: { newusers: Array<Object> } = { newusers: [] },
  action: Action
) => {
  switch (action.type) {
    case "REQUEST_NEW_USERS":
      return { ...state, loadnewusers: true };
    case "REQUEST_DELETE_USER":
      return { ...state, loaddeleteuser: true };
    case "SUCCESS_DELETE_USER":
      return {
        ...state,
        loaddeleteuser: false,
        newusers: state.newusers.filter((x: any) => x._id !== action.payload),
      };

    case "FAILED_DELETE_USER":
      return { ...state, loaddeleteuser: false, errdeleteuser: action.payload };

    case "SUCCESS_NEW_USERS":
      return {
        ...state,
        loadnewusers: false,
        newusers: action.payload,
        errnewusers: {},
      };
    case "FAILED_NEW_USERS":
      return { ...state, loadnewusers: false, errnewusers: action.payload };
    default: {
      return state;
    }
  }
};

const UserProfile = (
  state = {
    userProfile: {},
    errgetuser: {},
    loadupdateUser: false,
    loadgetuser: true,
    errupdateuser: {},
  },
  action: Action
) => {
  switch (action.type) {
    case "REQUEST_GET_USER":
      return { ...state, loadgetuser: true };
    case "SUCCESS_GET_USER":
      return {
        ...state,
        loadgetuser: false,
        userProfile: action.payload,
        errgetuser: {},
      };
    case "FAILED_GET_USER":
      return { ...state, loadgetuser: false, errgetuser: action.payload };
    case "REQUEST_UPDATR_USER":
      return { ...state, loadupdateUser: true };
    case "SUCCESS_UPDATR_USER":
      return {
        ...state,
        loadupdateUser: false,
        userProfile: action.payload,
        errupdateuser: {},
      };
    case "FAILED_UPDATR_USER":
      return { ...state, loadupdateUser: false, errupdateuser: action.payload };
    default: {
      return state;
    }
  }
};
export { userSign, userRigister, ActiveUsers, NewUsers, UserProfile };
