import React from "react";

/**
 * grid
 */
import GridContainer from "../components/Grid/GridContianer";
import GridItem from "../components/Grid/GridItem";

/**
 * material-ui
 */
import Typgoraphy from "@material-ui/core/Typography";

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
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
            padding: 16,
            display: "flex",

            alignItems: "center",
            height: "100%",
            marginTop: 16
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
                <Typgoraphy variant={"h3"}>
                    Hello, Homeklin :)
                </Typgoraphy>
                <Typgoraphy variant={"body1"}>
                    Welcome to your dashboard
                </Typgoraphy>
            </div>
        </div>
    )
};

export default Greeting;