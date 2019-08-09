import React from "react";

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
const LoginView = () => {
    const classes = useStyles();
    return (
        <div className={classes.Wrapper}>
            <div className={classes.Content}>
                <div>
                    <Login />
                </div>
            </div>
        </div>
    )
};

export default LoginView;