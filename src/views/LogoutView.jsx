import React from "react";

import {
    Typography
} from "@material-ui/core";

/**
 * core components
 */
import Logout from "../components/Auth/Logout";

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
const LogoutView = () => {
    const classes = useStyles();
    return (
        <div className={classes.Wrapper}>
            <div className={classes.Content}>
                <div>
                    <Typography variant={"h5"}>
                        You're logged in as Emmanuel Gatwech
                    </Typography>
                    <div>
                        <Logout />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LogoutView;