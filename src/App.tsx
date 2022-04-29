import { useEffect } from "react";
import Signin from "./components/Sign/Signin";
import Signup from "./components/Sign/Signup";
import Navbar from "./components/Nav/Navbar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Main from "./pages/Main";
import Watch from "./components/Fullvideo/Watch";
import adminindex from "./components/admindashboard/adminindex";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import io from "socket.io-client";
import { socketioappend } from "./actions/Socketio";
function App() {
  const useSign = useSelector((state: RootState) => state.userSign);
  const { userInfoSign } = useSign;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfoSign && Object.keys(userInfoSign).length !== 0) {
      const socket = io("http://localhost:5000");
      let id = userInfoSign._id;

      socket?.emit("NewUser", id);
      dispatch(socketioappend(socket));
    }
  }, [dispatch, userInfoSign]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Router>
        <Navbar />
        <div>
          {userInfoSign && Object.keys(userInfoSign).length === 0 ? (
            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/signin" component={Signin} />
              <Route
                exact
                path="*"
                component={() => {
                  return <Redirect to="/signin" />;
                }}
              />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/watchVideo" component={Watch} />
              <Route path="/adminPanel" component={adminindex} />
              <Route path="/series" component={Main} />
              <Route
                path="*"
                component={() => {
                  return <Redirect to="/" />;
                }}
              />
            </Switch>
          )}
        </div>
      </Router>
    </div>
  );
}

export default App;
