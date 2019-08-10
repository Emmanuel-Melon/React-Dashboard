import React from "react";
import {CircularProgress} from "@material-ui/core";
import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    SpinnerContainer: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center"
    },
    progress: {
        color: "#e08c05"
    }
});

const ProgressCircular = props => {
    const classes = useStyles();
    return (
        <div className={classes.SpinnerContainer}>
            <CircularProgress className={classes.progress} color="secondary" />
        </div>
    );
};

export default ProgressCircular;