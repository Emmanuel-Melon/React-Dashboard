import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        background: "#fff",
        display: "flex",
        justifyContent: "space-between",
        padding: 16,
        borderRadius: 8,
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);"
    },
    Gray: {
        color: "#989c98",
        fontWeight: 400
    },
    Upcoming: {
        color: "orange"
    },
    Declined: {
        color: "red"
    },
    Completed: {
        color: "green"
    }
}));

export default function UserDataSummary() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <div>
                    <Typography variant="h5" component="h3" className={classes.Completed}>
                        30
                    </Typography>
                    <Typography variant="body1" className={classes.Gray}>
                        Completed
                    </Typography>
                </div>
                <div>
                    <Typography variant="h5" component="h3" className={classes.Upcoming}>
                        17
                    </Typography>
                    <Typography variant="body1" className={classes.Gray}>
                        Upcoming
                    </Typography>
                </div>
                <div>
                    <Typography variant="h5" component="h3" className={classes.Declined}>
                        5
                    </Typography>
                    <Typography variant="body1" className={classes.Gray}>
                        Declined
                    </Typography>
                </div>
            </Paper>
        </div>
    );
}