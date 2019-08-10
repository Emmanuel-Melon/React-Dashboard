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
        background: "orange"
    },
    root: {
        width: '100%',
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

export default function FolderList() {
    const classes = useStyles();

    return (
        <List
            className={classes.root}
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Neighborhoods
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
                    secondary="Makindye Division"
                />
            </ListItem>
            <ListItem className={classes.ContactDetail}>
                <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Kansanga"
                    secondary="Makindye Division"
                />
            </ListItem>
        </List>
    );
}