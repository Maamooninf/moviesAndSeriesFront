import { useState, FC } from "react";
import {
  Parent,
  Signcont,
  Signheader,
  Signh,
  Signp,
  Signinputgroup,
  Signfooter,
  Signbtn,
  styles,
  Singdesign,
} from "./Signstyle";

import { TextField, InputAdornment, IconButton } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import { signinn } from "../../actions/Useractions";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
const Signin: FC<any> = (props) => {
  const useSign = useSelector((state: RootState) => state.userSign);
  const { error } = useSign;
  const dispatch = useDispatch();
  const [showPasswor, setShowPasswor] = useState(false);
  const handleClickPassword = () => setShowPasswor(!showPasswor);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { classes } = props;

  const handlesubmitin = () => {
    dispatch(signinn(password, username));
  };

  return (
    <Parent>
      <Signcont>
        <Singdesign />
        <Signheader>
          <Signp error={true}>
            {error && Object.keys(error).length !== 0 && error}
          </Signp>
          <Signh>Welcome</Signh>
          {/* <Signp>Sign in by entering the information below</Signp> */}

          {/* {
                     error&& Object.keys(error).length !== 0
                     && Object.getPrototypeOf(error) !== Object.prototype
                     &&<Signp error='true'>{error}</Signp>
                      } */}
        </Signheader>

        <Signinputgroup>
          <TextField
            label="username"
            InputProps={{
              className: classes.input,
            }}
            className={classes.root}
            InputLabelProps={{
              style: { color: "white" },
            }}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />

          <TextField
            label="password"
            InputProps={{
              className: classes.input,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickPassword}
                  >
                    {showPasswor ? (
                      <Visibility style={{ color: "white" }} />
                    ) : (
                      <VisibilityOff style={{ color: "white" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            className={classes.root}
            type={showPasswor ? "text" : "password"}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </Signinputgroup>

        <Signfooter>
          <Signbtn onClick={handlesubmitin}>Sign in</Signbtn>
          {/* <Signlink to='/signup'>
                don't have an account?
                 </Signlink> */}
        </Signfooter>
      </Signcont>
    </Parent>
  );
};

export default withStyles(styles)(Signin);
