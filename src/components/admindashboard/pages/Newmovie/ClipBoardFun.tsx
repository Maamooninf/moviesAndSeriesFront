import axios from "axios";
import { FC } from "react";
import { BsClipboardCheck } from "react-icons/bs";
import "./NewMovie.scss";

const ClipBoardFun: FC<{
  text: string;
  name: string;
  setprog: any;
  setmovie: any;
}> = ({ text, name, setprog, setmovie }) => {
  const handlecopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handlesetuploaded = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      let type = e.target.files[0].type.substr(0, 5);

      if (type === "video" || type === "image") {
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
            setmovie((prevState: any) => ({
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

  if (text) {
    return (
      <div className="movieRecorditem">
        <label>{name}</label>

        <div style={{ filter: "blur(0.3px)" }}>
          {text.length > 30 ? (
            <div
              style={{
                width: "max-content",
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                padding: "5px",
              }}
            >
              {text.substr(0, 30)}

              <div style={{ filter: "blur(1px)", marginRight: "5px" }}>
                {" "}
                ...{" "}
              </div>

              <BsClipboardCheck
                style={{ cursor: "pointer" }}
                onClick={() => handlecopy(text)}
              />
            </div>
          ) : (
            <div
              style={{
                width: "max-content",
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                padding: "5px",
              }}
            >
              {text}

              <BsClipboardCheck
                style={{ cursor: "pointer" }}
                onClick={() => handlecopy(text)}
              />
            </div>
          )}

          <input
            type="file"
            name={name}
            id="file"
            onChange={(e) => {
              handlesetuploaded(e);
            }}
            className="custominput"
          />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ClipBoardFun;
