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
    root: {
        width: '100%',
        maxWidth: 360,
        background: "#fff",
        padding: 16
    },
    ContactDetail: {
        borderRadius: 8,
        "&:hover": {
            background: "#ebfaec",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);",
            cursor: "pointer"
        },
    }
}));

export default function UserDocuments() {
    const classes = useStyles();

    return (
        <List
            className={classes.root}
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Personal Documents
                </ListSubheader>
            }
        >
            <ListItem className={classes.ContactDetail}>
                <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Muyenga"
                    secondary="Nalule Road" />
            </ListItem>
            <ListItem className={classes.ContactDetail}>
                <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Joined"
                    secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem className={classes.ContactDetail}>
                <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                        <BeachAccessIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="+256 - 779914481"
                    secondary="Mobile" />
            </ListItem>
        </List>
    );
}