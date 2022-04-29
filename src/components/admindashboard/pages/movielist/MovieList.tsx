import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMovie, getMovies } from "../../../../actions/MoviesActions";
import { RootState } from "../../../../store";
import Listoption from "../list/Listoption";
import { creatListMovies } from "../../../../actions/ListAction";
import "./movieList.scss";

interface Listinput {
  title: string;
  genre: string;
  type: string;
  content: Array<any>;
}

function MovieList() {
  const dispatch = useDispatch();

  const Getmovies = useSelector((state: RootState) => state.getListOfMovies);
  const { ListofMovies } = Getmovies;

  const [listinfo, setlistinfo] = useState<Listinput>({
    title: "",
    genre: "",
    content: [],
    type: "movie",
  });

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  if (ListofMovies && ListofMovies.length !== 0) {
    const handledelete = (id: string) => {
      dispatch(deleteMovie(id));
    };

    const handlecreatlist = () => {
      dispatch(creatListMovies(listinfo));
    };

    const handleChangeinfolist = (e: any) => {
      setlistinfo((prev: Listinput) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
    console.log(listinfo);

    const moviecolumns = [
      {
        field: "movies",
        headerName: "Movies",
        width: 300,
        renderCell: (params: any) => {
          return (
            <div className="userListUser">
              <img className="userListImg" alt="" />

              {params.row.title}
            </div>
          );
        },
      },
      {
        field: "genre",
        headerName: "Genre",
        width: 250,

        renderCell: (params: any) => {
          return (
            <>
              <div className="userListUser">{params.row.genre}</div>
            </>
          );
        },
      },
      {
        field: "limit",
        headerName: "Limit",
        width: 250,
        renderCell: (params: any) => {
          return (
            <>
              <p>{params.row.limit}</p>
            </>
          );
        },
      },
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params: any) => {
          return (
            <>
              <Link
                to={{ pathname: `/adminPanel/createmovie/${params.row.id}` }}
              >
                <button className="userListEdit">Edit</button>
              </Link>
              <DeleteOutline
                className="userListDelete"
                onClick={() => {
                  handledelete(params.row.id);
                }}
              />
            </>
          );
        },
      },
    ];

    return (
      <div className="movieList">
        <Link to={`/adminPanel/createmovie`} className="linkMoviecreat">
          Create Moive
        </Link>

        <Listoption
          title="All movies"
          arrayoption={ListofMovies}
          columns={moviecolumns}
          setlistinfo={setlistinfo}
        />

        <div className="createlistContianer">
          <label>Create a List of Movies</label>
          <div className="Listrecordes">
            <label>title</label>
            <input
              type="text"
              name="title"
              className="listRecord"
              onChange={(e) => handleChangeinfolist(e)}
            />

            <label>genre</label>
            <input
              type="text"
              name="genre"
              className="listRecord"
              onChange={(e) => handleChangeinfolist(e)}
            />
            <label>Type is</label>
            <select
              className="multiselect"
              onChange={(e: any) => {
                setlistinfo((prev: Listinput) => ({
                  ...prev,
                  type: e.target.value,
                }));
              }}
            >
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
            {listinfo?.content?.length !== 0 ? (
              <button className="linkMoviecreat" onClick={handlecreatlist}>
                Create List
              </button>
            ) : (
              <button className="linkMoviecreat">
                Please Select some videos
              </button>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>no data to show</div>;
  }
}

export default MovieList;
