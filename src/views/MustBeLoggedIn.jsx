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
import Login from "../components/Auth/Login";

/**
 * styles
 */
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles(theme => (
    {
        Content: {
            marginBottom: 16,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        Header: {
          marginBottom: 16
        },
        Wrapper: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 32
        }
    }
));


/**
 * @return {*}
 * @constructor
 */
const NotFoundView = () => {
    const classes = useStyles();
    return (
        <div className={classes.Wrapper}>
            <div className={classes.Content}>
                <div>
                    <Typgoraphy variant={"h5"} className={classes.Header}>
                        You have to be logged in to view this page.
                    </Typgoraphy>
                    <div>
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NotFoundView;