import { DeleteOutline } from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteListMovies, getList } from "../../../../actions/ListAction";
import { RootState } from "../../../../store";
import Listoption from "../list/Listoption";
import "./Listmovie.scss";
function Listmovie() {
  const dispatch = useDispatch();
  const Listred = useSelector((state: RootState) => state.getLists);
  const { lists } = Listred;

  useEffect(() => {
    dispatch(getList("none", "none"));
  }, [dispatch]);
  if (lists && lists.length !== 0) {
    const handledelete = (id: any) => {
      dispatch(deleteListMovies(id));
    };
    const Listcolumns = [
      {
        field: "list",
        headerName: "List",
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
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params: any) => {
          return (
            <>
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
      <div className="ListOflists">
        <div className="listtableCont">
          <Listoption
            title="All movies"
            arrayoption={lists}
            columns={Listcolumns}
          />
        </div>
      </div>
    );
  } else {
    return <div>no data</div>;
  }
}

export default Listmovie;
