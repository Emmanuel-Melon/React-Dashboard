import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    ManageUsers: {
        display: "flex",
        justifyContent: "space-between"
    },
    Employee: {
        display: "flex"
    },
    Stats: {
        display: "flex"
    },
    Manage: {
        display: "flex"
    }
});

export default function ManageUsers() {
    const classes = useStyles();
    return (
        <div className={classes.ManageUsers}>
            <div className={classes.Employee}>
                <h3>Employee</h3>
            </div>
            <div className={classes.Stats}>
                <h3>Stats</h3>
            </div>
            <div className={classes.Manage}>
                <h3>Manage</h3>
            </div>
        </div>
    )
}