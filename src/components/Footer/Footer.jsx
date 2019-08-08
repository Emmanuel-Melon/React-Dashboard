import React from "react";

import {
    makeStyles,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles({
   Footer: {
       background: "#e08c05",
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       padding: 16
   },
    FooterText: {
       color: "#333"
    }
});

export default function Footer () {
    const classes = useStyles();
    return (
        <div className={classes.Footer}>
            <Typography
                className={classes.FooterText}
                variant={"body1"}
            >
                All Rights Reserved &copy; Yonja 2019
            </Typography>
        </div>
    )
}