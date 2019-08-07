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
import ImageIcon from '@material-ui/icons/Event';
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles(theme => ({
    avatar: {
        background: "#81C784"
    },
    root: {
        width: '100%',
        background: "#fff",
        padding: 16,
        marginBottom: 16
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

export default function CollectionDays() {
    const classes = useStyles();

    return (
        <List
            className={classes.root}
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Collection Days
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
                    primary="Monday"
                    />
            </ListItem>
            <ListItem className={classes.ContactDetail}>
                <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Friday"
                    />
            </ListItem>
        </List>
    );
}