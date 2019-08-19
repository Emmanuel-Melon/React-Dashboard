import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './Nav.scss';

/**
 * context
 */
import { AuthConsumer } from "../../services/auth";

/**
 *
 * @return {*}
 * @constructor
 */
class Nav extends Component {
    render () {
        return (
            <AuthConsumer>
                { authUser => {
                    return (
                        <div className="navbar">
                            <input type="checkbox" id="navbar-check"/>
                            <div className="navbar__header">
                                <div className="navbar__header__brand">
                                    Yonja
                                </div>
                            </div>
                            <div className="navbar__btn">
                                <label htmlFor="navbar-check">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </label>
                            </div>
                            { (authUser !== null) ? (
                                <div className="navbar__links">
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/agents">Agents</NavLink>
                                    <NavLink to="/schedules">Schedules</NavLink>
                                    <NavLink to="/account">Account</NavLink>
                                    <NavLink to="/logout">Logout</NavLink>
                                </div>
                            ) : (
                                <div className="navbar__links">
                                    <NavLink to="/login">Login</NavLink>
                                    <NavLink to="/register">Register</NavLink>
                                </div>
                            ) }

                        </div>
                    );
                }}
            </AuthConsumer>
        )
    }
};

export default Nav;