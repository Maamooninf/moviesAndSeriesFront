import { FC, useEffect, useState } from "react";
import { Publish } from "@material-ui/icons";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./user.scss";
import { MyComponent } from "../../interfaces/paramsRecord";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../../../actions/Useractions";
import { RootState } from "../../../../store";
import axios from "axios";
export interface info {
  email: string;
  name: string;
  fullname: string;
  profilePic: string;
}
const UserRecords: FC<MyComponent> = (props) => {
  const dispatch = useDispatch();

  const UserProfile = useSelector((state: RootState) => state.UserProfile);
  const { userProfile, loadupdateUser, loadgetuser, errupdateuser } =
    UserProfile;

  const { id } = useParams<{ id: string }>();

  const [progress, setprog] = useState(0);
  const [userbody, setuserbody] = useState<info>({
    email: "",
    name: "",
    fullname: "",
    profilePic: "",
  });

  useEffect((): any => {
    let mount = true;

    if (mount) dispatch(getUser(id));

    return () => {
      mount = false;
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (userProfile) setuserbody(userProfile);
  }, [userProfile]);

  const handlemodifying = () => {
    if (userProfile && Object.keys(userProfile).length !== 0) {
      dispatch(updateUser(userProfile._id, userbody));
    }
  };

  const handlechange = (e: any) => {
    setuserbody((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const handlepickimage = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      let type = e.target.files[0].type.substr(0, 5);

      if (type === "image") {
        const content = e.target.files[0];

        const formData = new FormData();

        formData.append("file", content);

        formData.append("upload_preset", "yn84ei0z");

        axios
          .request({
            method: "post",
            url: ``,

            data: formData,

            onUploadProgress: (p) => {
              setprog((p.loaded / p.total) * 100);
            },
          })

          .then((res: any) => {
            setuserbody((prevState) => ({
              ...prevState,

              [e.target.name]: res.data.secure_url,
            }));

            setprog(0);
          })

          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  if (userProfile && Object.keys(userProfile).length !== 0) {
    if (loadupdateUser === true) {
      return (
        <div className="blure">
          <CircularProgress style={{ zIndex: 999 }} />
        </div>
      );
    } else {
      return (
        <div className="userUpdate">
          <span className="userUpdateTitle">
            {props.match.params.id ? "Edit" : "Create"}
          </span>

          <LinearProgress
            variant="determinate"
            value={progress}
            style={{ margin: "15px" }}
          />

          <div className="userUpdateForm">
            <div className="userUpdateRight">
              <div className="userUpdateItem">
                {errupdateuser && errupdateuser.messages && (
                  <p>{errupdateuser.messages.name}</p>
                )}

                <label>Username</label>

                <input
                  type="text"
                  name="name"
                  value={(userbody && userbody.name) || " "}
                  className="userUpdateInput"
                  onChange={(e: any) => handlechange(e)}
                />
              </div>

              <div className="userUpdateItem">
                {errupdateuser && errupdateuser.messages && (
                  <p>{errupdateuser.messages.fullname}</p>
                )}

                <label>Full Name</label>

                <input
                  name="fullname"
                  type="text"
                  value={(userbody && userbody.fullname) || ""}
                  className="userUpdateInput"
                  onChange={(e: any) => handlechange(e)}
                />
              </div>

              <div className="userUpdateItem">
                {errupdateuser && errupdateuser.messages && (
                  <p>{errupdateuser.messages.email}</p>
                )}

                <label>Email</label>

                <input
                  name="email"
                  type="text"
                  value={(userbody && userbody.email) || ""}
                  className="userUpdateInput"
                  onChange={(e: any) => handlechange(e)}
                />
              </div>
            </div>

            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <>
                  <img
                    className="userUpdateImg"
                    src={(userbody && userbody.profilePic) || " "}
                    alt=""
                  />
                </>

                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>

                <input
                  type="file"
                  id="file"
                  name="profilePic"
                  style={{ display: "none" }}
                  onChange={(e) => handlepickimage(e)}
                />
              </div>

              {progress === 0 && (
                <button className="userUpdateButton" onClick={handlemodifying}>
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }
  } else {
    if (loadgetuser === true) {
      return (
        <div className="blure">
          <CircularProgress style={{ zIndex: 999 }} />
        </div>
      );
    } else {
      return <div>Error</div>;
    }
  }
};

export default UserRecords;
