import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListSubheader from "@material-ui/core/ListSubheader"

/**
 * icons
 */
import CalendarIcon from '@material-ui/icons/Event';

const useStyles = makeStyles(theme => ({
    avatar: {
        background: "orange"
    },
    root: {
        width: '100%',
        maxWidth: 360,
        background: "#fff",
        padding: 16
    },
    Upcoming: {
        background: "#cef2d0",
        borderRadius: 8,
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        marginBottom: 8,
    },
    UpcomingIcon: {
        background: "#fff",
        color: "#81C784"
    },
    Trip: {
        borderRadius: 8,
        marginBottom: 8,
        "&:hover": {
            background: "#ebfaec",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);",
            cursor: "pointer"
        },
    }
}));

export default function UserUpcomingTaskSummary() {
    const classes = useStyles();

    return (
        <List
            className={classes.root}
              subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                      Upcoming Trips
                  </ListSubheader>
              }
        >
            <ListItem className={classes.Upcoming}>
                <ListItemAvatar>
                    <Avatar className={classes.UpcomingIcon}>
                        <CalendarIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Nalule Road, Muyenga"
                    secondary="Monday - Jan 7, 2014"
                />
            </ListItem>
            <ListItem className={classes.Trip}>
                <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                        <CalendarIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Tank Hill, Muyenga"
                    secondary="Wednesday - Jan 7, 2014"
                />
            </ListItem>
            <ListItem className={classes.Trip}>
                <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                        <CalendarIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Kalungi Road, Muyenga"
                    secondary="Monday - Jan 7, 2014"
                />
            </ListItem>
        </List>
    );
}