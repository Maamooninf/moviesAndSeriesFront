export interface actionPendingMovie {
  type:
    | "REQUEST_RANDOM_MOVIE"
    | "REQUEST_GET_MOVIES"
    | "REQUEST_DELETE_MOVIES"
    | "REQUEST_CREATE_MOVIE"
    | "REQUEST_UPDATE_RANDOM_MOVIE";
}
export interface actionSuccessMovie {
  type:
    | "SUCCESS_RANDOM_MOVIE"
    | "SUCCESS_GET_MOVIES"
    | "SUCCESS_DELETE_MOVIES"
    | "SUCCESS_CREATE_MOVIE"
    | "SUCCESS_UPDATE_RANDOM_MOVIE"
    | "SUCCESS_GET_MOVIE";
  payload: any;
}

export interface actionFailMovie {
  type:
    | "FAILED_RANDOM_MOVIE"
    | "FAILED_GET_MOVIES"
    | "FAILED_DELETE_MOVIES"
    | "FAILED_CREATE_MOVIE"
    | "FAILED_UPDATE_RANDOM_MOVIES"
    | "FAILED_GET_MOVIE";
  payload: any;
}
export type ActionMovie =
  | actionPendingMovie
  | actionSuccessMovie
  | actionFailMovie;
