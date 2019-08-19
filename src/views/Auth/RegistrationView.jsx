import React from "react";
import RegisterProvider from "../../provider/RegisterProvider";

import { Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    Content: {
      marginTop: 32
    },
    Wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});

const RegisterUser = () => {
    const classes = useStyles();
    return (
        <div  className={classes.Wrapper}>
            <div className={classes.Content}>
                <Typography variant={"h5"}>
                    Register as a provider
                </Typography>
                <RegisterProvider />
            </div>
        </div>
    )
};

export default RegisterUser;
