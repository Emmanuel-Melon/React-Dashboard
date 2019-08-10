import React from "react";

/**
 * material-ui
 */
import Typography from "@material-ui/core/Typography";

/**
 * core components
 */

/**
 * styles
 */
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles(theme => (
    {
        Content: {
            marginBottom: 16
        },
        Wrapper: {
            background: "white",
            padding: 16,
            display: "flex",
            alignItems: "center",
            height: "100%"
        }
    }
));


/**
 * @return {*}
 * @constructor
 */
const Greeting = () => {
    const classes = useStyles();
    return (
        <div className={classes.Wrapper}>
            <div className={classes.Content}>
                <Typography variant={"h3"}>
                    Hello, Yonja Customer :)
                </Typography>
                <Typography variant={"body1"}>
                    Welcome to your dashboard
                </Typography>
            </div>
        </div>
    )
};

export default Greeting;