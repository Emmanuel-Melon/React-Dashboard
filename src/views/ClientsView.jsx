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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
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
                <Typgoraphy variant={"h1"}>
                    List Clients
                </Typgoraphy>
            </div>
        </div>
    )
};

export default NotFoundView;