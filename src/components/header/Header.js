import React from "react";
import { Link, useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";
import logo from "../../assets/images/goodlaughslogo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../store/index.";

const Header = props => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { login, logout } = bindActionCreators(actions, dispatch);
  const history = useHistory();
  const { loginVisible, setLoginVisible } = props;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="header">
      <Link to="/">
        <img src={logo} alt="" className="logo_icon" />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      {state.users.username ? (
        <Navbar.Brand>Welcome Back {state.users.username}</Navbar.Brand>
      ) : (
        ""
      )}
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {state.users.isAdmin ? (
            <Link className="headerNavLinks" to="/admin">
              Admin
            </Link>
          ) : (
            ""
          )}

          <Link className="headerNavLinks" to="/events">
            Current Shows
          </Link>
          <Link className="headerNavLinks">Event Calendar</Link>
          {!state.users.username ? (
            <p
              className="signupLink"
              style={{
                textDecoration: "none",
                fontSize: "25px",
                color: "white",
                paddingLeft: "15px",
              }}
              eventKey={2}
              onClick={() => setLoginVisible(true)}>
              Login/Signup
            </p>
          ) : (
            <p
              className="signupLink"
              style={{
                textDecoration: "none",
                fontSize: "25px",
                color: "white",
                paddingLeft: "15px",
              }}
              eventKey={2}
              onClick={() => {
                logout();
                history.push("/");
              }}>
              Logout
            </p>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
