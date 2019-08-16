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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

/**
 * styles
 */
import { makeStyles } from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";
const useStyles = makeStyles({
    List: {
        background: "#fff"
    },
    NavLink: {
        color: "#333",
        textDecoration: "none"
    }
});

// 'Info', 'Password', 'About', "logout", "Verify"
const routes = [
    {
       id: 1,
       name: "info",
        icon: ""
    },
    {
        id: 2,
        name: "password",
        icon: ""
    },
    {
        id: 3,
        name: "about",
        icon: ""
    },
    {
        id: 4,
        name: "logout",
        icon: ""
    },
    {
        id: 5,
        name: "verify",
        icon: ""
    }
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
                {['Info', 'Password', 'About', "logout", "Verify" ].map((text, index) => (
                    <NavLink to={`/account/${text}`} className={classes.NavLink}>
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </div>
    )
}