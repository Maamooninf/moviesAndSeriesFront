export interface actionPending {
  type:
    | "REQUEST_SIGN"
    | "REQUEST_RIGISTER"
    | "REQUEST_ACTIVE_USERS"
    | "REQUEST_NEW_USERS"
    | "REQUEST_GET_USER"
    | "REQUEST_UPDATR_USER"
    | "REQUEST_DELETE_USER";
}
export interface actionSuccess {
  type:
    | "SUCCESS_SIGN"
    | "SUCCESS_RIGISTER"
    | "SUCCESS_ACTIVE_USERS"
    | "SUCCESS_NEW_USERS"
    | "SUCCESS_GET_USER"
    | "SUCCESS_UPDATR_USER"
    | "SUCCESS_DELETE_USER";
  payload: any;
  current?: any;
}
export interface actionsignout {
  type: "SUCCESS_SIGNOUT";
  payload?: any;
}

export interface actionFail {
  type:
    | "FAILED_SIGN"
    | "FAILED_RIGISTER"
    | "FAILED_ACTIVE_USERS"
    | "FAILED_NEW_USERS"
    | "FAILED_GET_USER"
    | "FAILED_UPDATR_USER"
    | "FAILED_DELETE_USER";
  payload: any;
}
export type Action = actionPending | actionSuccess | actionFail | actionsignout;
