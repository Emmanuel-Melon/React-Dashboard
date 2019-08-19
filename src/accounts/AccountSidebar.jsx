import React from "react"

import { NavLink, Router } from "react-router-dom";

/**
 * material-ui/core
 */
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

/**
 * material-ui/icons
 */
import InfoIcon from '@material-ui/icons/Assignment';
import AboutIcon from '@material-ui/icons/Help';
import LogoutIcon from '@material-ui/icons/KeyboardArrowLeft';
import VerifyIcon from '@material-ui/icons/Done';
import PricingIcon from '@material-ui/icons/CreditCard';
import SchedulesIcon from '@material-ui/icons/Today';
import PasswordIcon from '@material-ui/icons/Lock';

/**
 * styles
 */
import { makeStyles } from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";
const useStyles = makeStyles({
    List: {

    },
    NavLink: {
        color: "#333",
        textDecoration: "none"
    }
});

const routes = [
    {
       id: 1,
       name: "info",
       text: "Info",
        icon: <InfoIcon />
    },
    {
        id: 2,
        name: "password",
        text: "Password Management",
        icon: <PasswordIcon />
    },
    {
        id: 6,
        name: "pricing",
        text: "Pricing",
        icon: <PricingIcon />
    },
    {
        id: 7,
        name: "schedules",
        text: "Schedules",
        icon: <SchedulesIcon />
    },
    {
        id: 3,
        name: "about",
        text: "About",
        icon: <AboutIcon />
    },
    {
        id: 4,
        name: "logout",
        text: "Logout",
        icon: <LogoutIcon />
    },
];

/**
 * @return {*}
 * @constructor
 */
export default function AccountSidebar () {
    const classes = useStyles();
    return (
        <div>
            <List className={classes.List}
                  subheader={
                      <ListSubheader component="div" id="nested-list-subheader">
                          Account Management
                      </ListSubheader>
                  }
            >
                {routes.map(route => (
                    <NavLink to={`/account/${route.name}`} className={classes.NavLink}>
                        <ListItem button key={route.name}>
                            <ListItemIcon>
                                {route.icon}
                            </ListItemIcon>
                            <ListItemText primary={route.text} />
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </div>
    )
}