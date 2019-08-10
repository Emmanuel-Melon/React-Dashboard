import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from '@material-ui/core/Avatar';
import  Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

/**
 * icons
 */
import CheckCircle from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles(theme => ({
    avatar: {
        background: "#e08c05"
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

const completed = [
    {
        id: 1,
        name: "Muyenga",
        letter: "M",
        description: "Some description about this neighborhood",
        completedAt: "25/07/2019",
        summary: "Kengo visited Client 012"
    },
    {
        id: 2,
        name: "Kansanga",
        letter: "K",
        description: "Some description about this neighborhood",
        completedAt: "25/07/2019",
        summary: "Bill Kabanga"
    },
    {
        id: 3,
        name: "Kansanga",
        letter: "K",
        description: "Some description about this neighborhood",
        completedAt: "25/07/2019",
        summary: "Emmanuel Gatwech"
    }
];

export default function Completed() {
    const classes = useStyles();

    return (
        <List
            className={classes.root}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Upcoming Trips
                </ListSubheader>
            }
        >
            {
                completed.map(job => {
                    return (                <ListItem>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <CheckCircle />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={job.summary}
                        />
                        <ListItemSecondaryAction>
                            <Typography variant="body2" color="primary">
                                {job.completedAt}
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItem>)
                })
            }
        </List>
    );
}