import React, { FC } from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.scss";
import { signout } from "../../actions/Useractions";
import { RootState } from "../../store";
const style = (theme: any) => ({
  appBarSpacer: theme.mixins.toolbar,
});
const Navbar: FC<any> = ({ classes }) => {
  const dispatch = useDispatch();

  const useSign = useSelector((state: RootState) => state.userSign);
  const { userInfoSign } = useSign;

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handlelogout = () => {
    dispatch(signout());
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <div>
        {userInfoSign && Object.keys(userInfoSign).length === 0 ? (
          <div>
            <MenuItem>
              <Link
                to={`/signin`}
                className="navlink"
                style={{ color: "black" }}
              >
                Sign in
              </Link>
            </MenuItem>

            <MenuItem>
              <Link
                to={`/signup`}
                className="navlink"
                style={{ color: "black" }}
              >
                Register
              </Link>
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem>
              <Link
                to={`/series`}
                className="navlink"
                style={{ color: "black" }}
              >
                Series
              </Link>
            </MenuItem>
            <MenuItem>
              <IconButton
                size="small"
                color="inherit"
                style={{ color: "black" }}
                onClick={handlelogout}
              >
                Log out
              </IconButton>
            </MenuItem>
            <MenuItem>
              <Link
                to={{
                  pathname: "/",
                  state: { message: "hello, im a passed message!" },
                }}
                className="navlink"
                style={{ color: "black" }}
              >
                Movies
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/adminPanel"
                className="navlink"
                style={{ color: "black" }}
              >
                AdminDash
              </Link>
            </MenuItem>
          </div>
        )}
      </div>
    </Menu>
  );

  return (
    <div className={classes.appBarSpacer}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{
            position: "-webkit-sticky",
            top: "0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            backgroundImage:
              //  #ffb641  6441a5  #2a0845  #f857a6

              " linear-gradient(62deg, #6441a5 0%, #420a70 100%)",
          }}
        >
          <IconButton size="medium" color="inherit">
            <Link to={`/`} className="navlink" style={{ fontSize: "1.7rem" }}>
              Home
            </Link>
          </IconButton>
          <Toolbar>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <div>
                {userInfoSign && Object.keys(userInfoSign).length === 0 ? (
                  <div>
                    <IconButton>
                      <Link to={`/signin`} className="navlink">
                        Sign in
                      </Link>
                    </IconButton>

                    <IconButton>
                      <Link to={`/signup`} className="navlink">
                        Register
                      </Link>
                    </IconButton>
                  </div>
                ) : (
                  <div>
                    <IconButton>
                      <Link to={`/series`} className="navlink">
                        Series
                      </Link>
                    </IconButton>

                    <IconButton>
                      <Link to={`/`} className="navlink">
                        Movies
                      </Link>
                    </IconButton>

                    <IconButton
                      size="small"
                      onClick={handlelogout}
                      style={{ color: "white" }}
                    >
                      Log out
                    </IconButton>
                    <IconButton
                      size="small"
                      style={{ color: "white", marginLeft: "5px" }}
                    >
                      <Link to="/adminPanel" className="navlink">
                        Admin dash
                      </Link>
                    </IconButton>
                  </div>
                )}
              </div>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="medium"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </Box>
    </div>
  );
};
export default withStyles(style)(Navbar);
