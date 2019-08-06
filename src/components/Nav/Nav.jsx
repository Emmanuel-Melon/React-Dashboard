import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.scss';

const Nav = () => {
  return (
      <div className="navbar">
          <input type="checkbox" id="navbar-check"/>
          <div className="navbar__header">
              <div className="navbar__header__brand">
                  Yonja
              </div>
          </div>
          <div className="navbar__btn">
            <label for="navbar-check">
                <span></span>
                <span></span>
                <span></span>
            </label>
          </div>
          <div className="navbar__links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/settings">Settings</NavLink>
            <NavLink to="/users">Users</NavLink>
          </div>
      </div>
  )
};

export default Nav;