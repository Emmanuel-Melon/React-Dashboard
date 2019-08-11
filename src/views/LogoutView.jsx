import React from "react";

import {
    Typography
} from "@material-ui/core";

/**
 * context
 */
import { AuthConsumer } from "../services/auth";

/**
 * core components
 */
import Logout from "../components/Auth/Logout";
import Spinner from "../components/Spinners/Spinner";

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
 * TODO: display error message when spinner times out
 * * Observation page reloads when spinner times out.
 */
const LogoutView = () => {
    const classes = useStyles();
    return (
        <AuthConsumer>
            { authUser => {
                console.log(authUser);
                return (
                    <div className={classes.Wrapper}>
                        <div className={classes.Content}>
                            { (authUser !== null ) ? (
                                <div>
                                    <Typography variant={"h5"}>
                                        You're logged in as {authUser.email}.
                                    </Typography>
                                    <div>
                                        <Logout />
                                    </div>
                                </div>
                            ) : (
                                <Spinner/>
                            )}
                        </div>
                    </div>
                )
            }}
        </AuthConsumer>
    )
};

export default LogoutView;