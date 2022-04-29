export interface actionPendingMovieList {
  type: "REQUEST_GET_LIST" | "REQUEST_CRATE_LIST" | "REQUEST_DELETE_LIST";
}
export interface actionSuccessMovieList {
  type: "SUCCESS_GET_LIST" | "SUCCESS_CRATE_LIST" | "SUCCESS_DELETE_LIST";
  payload: any;
}

export interface actionFailMovieList {
  type: "FAILED_GET_LIST" | "FAILED_CRATE_LIST" | "FALIED_DELETE_LIST";
  payload: any;
}
export type ActionList =
  | actionPendingMovieList
  | actionSuccessMovieList
  | actionFailMovieList;
