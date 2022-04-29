export interface actionPendingMessaging {
  type:
    | "REQUEST_GET_CONVERSATION"
    | "REQUEST_CREATE_CONVERSATION"
    | "REQUEST_GET_MESSAGES"
    | "REQUEST_CREAT_MESSAGE";
}
export interface actionSuccessMessaging {
  type:
    | "SUCCESS_GET_CONVERSATION"
    | "SUCCESS_CREATE_CONVERSATION"
    | "SUCCESS_GET_MESSAGES"
    | "SUCCESS_CREAT_MESSAGE";
  payload: any;
}

export interface actionFailMMessaging {
  type:
    | "FAILED_GET_CONVERSATION"
    | "FAILED_CREATE_CONVERSATION"
    | "FAILED_GET_MESSAGES"
    | "FAILED_CREAT_MESSAGE";
  payload: any;
}
export type ActionMessaging =
  | actionPendingMessaging
  | actionSuccessMessaging
  | actionFailMMessaging;
