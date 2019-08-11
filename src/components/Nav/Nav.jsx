import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './Nav.scss';

/**
 * context
 */
import { AuthConsumer } from "../../services/auth";

import Logout from "../Auth/Logout";

const AuthNav = () => {
    return (
        <div>
            <ul>
                <li><button>Logout</button></li>
            </ul>
        </div>
    )
};

const NoAuthNav = () => {
    return (
        <div>
            <ul>
                <li><button>Logout</button></li>
            </ul>
        </div>
    )
};

/**
 *
 * @return {*}
 * @constructor
 */
class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false
        }

    }

    componentDidMount() {

    }


    render () {
        console.log(this.props);
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
                                    <NavLink to="/clients">Clients</NavLink>
                                    <NavLink to="/schedules">Schedules</NavLink>
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