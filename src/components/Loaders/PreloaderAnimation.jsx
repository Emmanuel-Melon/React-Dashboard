import React from "react";

/**
 * styles
 */
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    "@keyframes animate": {
        from: {
            transition: "none"
        },
        to: {
            backgroundColor: "#f6f7f8",
            transition: "all 0.3s ease-out"
        }
    },
    animationLoading: {
        background: "#fff",
        border: "1px solid",
        borderColor: "#e5e6e9",
        borderRadius: "3px",
        display: "block",
        height: "324px",
        width: "494px",
        padding: "12px",
    },
    container: {
        width: "100%",
        height: "30px"
    },
    one: {
        position: "relative",
        backgroundColor: "#CCC",
        // height: "6px",
        animationName: "animate",
        animationDuration: "2s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        left: 0,
        height: "40px",
        width: "40px",
    },
    two: {
        position: "relative",
        backgroundColor: "#CCC",
        height: "6px",
        animationName: "animate",
        animationDuration: "2s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        left: "50px",
        top: "-33px",
        width: "25%"
    },
    Three: {
        position: "relative",
        backgroundColor: "#CCC",
        height: "6px",
        animationName: "animate",
        animationDuration: "2s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        left: "50px",
        top: "-20px",
        width: "15%"
    },
    four: {
        position: "relative",
        backgroundColor: "#CCC",
        height: "6px",
        animationName: "animate",
        animationDuration: "2s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        left: "0px",
        top: "30px",
        width: "80%"
    },
    five: {
        position: "relative",
        backgroundColor: "#CCC",
        height: "6px",
        animationName: "animate",
        animationDuration: "2s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        left: "0px",
        top: "45px",
        width: "90%"
    },
    six: {
        position: "relative",
        backgroundColor: "#CCC",
        height: "6px",
        animationName: "animate",
        animationDuration: "2s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        left: "0px",
        top: "60px",
        width: "50%"
    }
});

export default function PreloaderAnimation () {
    const classes = useStyles();
    return (
        <div className={classes.animationLoading}>
            <div id={classes.container}>
                <div className={classes.one}></div>
                <div className={classes.two}></div>
                <div className={classes.three}></div>
            </div>
            <div className={classes.four}></div>
            <div className={classes.five}></div>
            <div className={classes.six}></div>
        </div>
    )

}