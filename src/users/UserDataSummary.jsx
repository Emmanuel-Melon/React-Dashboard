import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        background: "#FAFAFA",
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(3, 2),
    },
}));

export default function UserDataSummary() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <div>
                    <Typography variant="h5" component="h3">
                        300
                    </Typography>
                    <Typography variant="p" component="h3">
                        Completed
                    </Typography>
                </div>
                <div>
                    <Typography variant="h5" component="h3">
                        300
                    </Typography>
                    <Typography variant="p" component="h3">
                        Upcoming
                    </Typography>
                </div>
                <div>
                    <Typography variant="h5" component="h3">
                        300
                    </Typography>
                    <Typography variant="p" component="h3">
                        Declined
                    </Typography>
                </div>
            </Paper>
        </div>
    );
}