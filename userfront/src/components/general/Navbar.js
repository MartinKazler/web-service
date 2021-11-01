import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Product from "./../product/Product";
import Login from "./../views/Login";
import Register from "./../views/Register";
import {
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Nav,
  NavLogo,
  Bars,
} from "./NavbarElem";

const Navbar = ({ loggedIn, setToken, setLoggedIn }) => {
  return (
    <div className="Navbar">
      <h1 className="Navbar-title">
        Web-Service Products
      </h1>
      <BrowserRouter>
        <div className="header">
          <Nav>
            <NavLogo to="/">
              <Bars />
              <NavMenu>
                <NavLink exact activeClassName="active" to="/">
                  Register
                </NavLink>
                <br />
                <NavLink activeClassName="active" to="/Login">
                  Login
                </NavLink>
                <br />
                <NavLink activeClassName="active" to="/Product">
                  Products
                </NavLink>
                <br />
              <NavBtn>
                <NavBtnLink to="/Navbar">Logout</NavBtnLink>
              </NavBtn>
              </NavMenu>
            </NavLogo>
          </Nav>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Register} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Product" component={Product} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
