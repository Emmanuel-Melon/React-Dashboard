import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

/**
 * icons
 */
import ImageIcon from '@material-ui/icons/LocationCity';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/Smartphone';
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles(theme => ({
    avatar: {
        background: "#81C784"
    },
    avatarSuspended: {
        background: "#fff",
        color: "#FF7043"
    },
    root: {
        width: '100%',
        background: "#fff",
        padding: 16
    },
    ContactDetail: {
        borderRadius: 8,
        marginBottom: 8,
        "&:hover": {
            background: "#ebfaec",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);",
            cursor: "pointer"
        },
    },
    Active: {
        background: "#cef2d0",
        borderRadius: 8,
        marginBottom: 8,
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        "&:hover": {
            background: "#ebfaec",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);",
        },
    },
    Suspended: {
        background: "#FF7043",
        borderRadius: 8,
        marginBottom: 8,
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        "&:hover": {
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);",
            cursor: "pointer"
        },
    }
}));

export default function FilterAgents() {
    const classes = useStyles();

    return (
        <List
            className={classes.root}
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Filter Agents
                </ListSubheader>
            }
        >
            <ListItem className={classes.Active}>
                <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Active"
                />
            </ListItem>
            <ListItem className={classes.Suspended}>
                <ListItemAvatar>
                    <Avatar className={classes.avatarSuspended}>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Suspended"
                />
            </ListItem>
            <ListItem className={classes.ContactDetail}>
                <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="On-Leave"
                />
            </ListItem>
        </List>
    );
}