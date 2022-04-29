import { ActionMovie } from "../actions/actioninterfaces/MovieActioninter";
interface StatemovieList {
  ListofMovies: any[];
}
interface StateRandom {
  movie: any[];
  fullvideo: any[];
  errGetFull: Object;
}
const getMovie = (
  state: StateRandom = { movie: [], fullvideo: [], errGetFull: {} },
  action: ActionMovie
) => {
  switch (action.type) {
    case "REQUEST_RANDOM_MOVIE":
      return { ...state, load: true };
    case "SUCCESS_RANDOM_MOVIE":
      return { ...state, load: false, movie: action.payload, errorMovie: {} };
    case "FAILED_RANDOM_MOVIE":
      return { ...state, load: false, errorMovie: action.payload, movie: [] };
    case "REQUEST_UPDATE_RANDOM_MOVIE":
      return { ...state, loadupdatemovie: true };

    case "SUCCESS_UPDATE_RANDOM_MOVIE":
      return {
        ...state,
        movie: action.payload,
        loadupdatemovie: false,
        errupdatemovie: {},
      };
    case "SUCCESS_GET_MOVIE":
      return { ...state, fullvideo: action.payload, load: false };
    case "FAILED_GET_MOVIE":
      return { ...state, errGetFull: action.payload, load: false };

    case "FAILED_UPDATE_RANDOM_MOVIES":
      return {
        ...state,
        errupdatemovie: action.payload,
        loadupdatemovie: false,
      };
    default: {
      return state;
    }
  }
};
const getListOfMovies = (
  state: StatemovieList = { ListofMovies: [] },
  action: ActionMovie
) => {
  switch (action.type) {
    case "REQUEST_GET_MOVIES":
      return { ...state, loadmovies: true };
    case "SUCCESS_GET_MOVIES":
      return {
        ...state,
        loadmovies: false,
        ListofMovies: action.payload,
        errgetmovies: {},
      };
    case "FAILED_GET_MOVIES":
      return {
        ...state,
        loadmovies: false,
        errgetmovies: action.payload,
        ListofMovies: [],
      };
    case "REQUEST_DELETE_MOVIES":
      return { ...state, loaddeletemovie: true };
    case "SUCCESS_DELETE_MOVIES":
      return {
        ...state,
        loaddeletemovie: false,
        ListofMovies: state.ListofMovies.filter(
          (x: any) => x._id !== action.payload
        ),
      };

    case "REQUEST_CREATE_MOVIE":
      return { ...state, loadcreatemovie: true };
    case "SUCCESS_CREATE_MOVIE":
      return { ...state, loadcreatemovie: false, errcreatmovie: {} };
    case "FAILED_CREATE_MOVIE":
      return {
        ...state,
        loadcreatemovie: false,
        errcreatmovie: action.payload,
      };
    case "FAILED_DELETE_MOVIES":
      return {
        ...state,
        loaddeletemovie: false,
        errdeletemovies: action.payload,
      };
    default: {
      return state;
    }
  }
};
export { getMovie, getListOfMovies };
