import { Redirect, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import AdminHome from "./pages/home/Home";
import UserList from "./pages/userList/userList";
import User from "./pages/userprofile/Userpro";
import UserRecords from "./pages/userprofile/UserRecords";
import MovieList from "./pages/movielist/MovieList";
import Newmovie from "./pages/Newmovie/Newmovie";
import MovieProfile from "./pages/movieprofile/MovieProfile";
import Listmovie from "./pages/Listmovies/Listmovie";
import Contact from "./pages/Contact/Contact";
function adminindex() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        overflowX: "hidden",
      }}
    >
      <Sidebar />
      <Switch>
        <Route exact path="/adminPanel" component={AdminHome} />

        <Route path="/adminPanel/users" component={UserList} />
        <Route path="/adminPanel/user/:id" component={User} />
        <Route path="/adminPanel/newUser/:id" component={UserRecords} />
        <Route path="/adminPanel/movies" component={MovieList} />
        <Route path="/adminPanel/createmovie/:id" component={Newmovie} />
        <Route path="/adminPanel/createmovie" component={Newmovie} />
        <Route path="/adminPanel/lists" component={Listmovie} />
        <Route path="/adminPanel/movie/:id" component={MovieProfile} />

        <Route path="/adminPanel/contactUs" component={Contact} />
        <Route
          path="*"
          component={() => {
            return <Redirect to="/adminPanel" />;
          }}
        />
      </Switch>
    </div>
  );
}

export default adminindex;
