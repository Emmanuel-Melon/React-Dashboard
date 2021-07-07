import React from "react";

/**
 * material-ui
 */
import {
    Typography
} from "@material-ui/core";

/**
 * grid
 */
import GridContainer from "../components/Grid/GridContianer";
import GridItem from "../components/Grid/GridItem";

/**
 * core components
 */
import Content from "../components/Landing/Content";
import Sidebar from "../components/Landing/Sidebar";


/**
 * styles
 */
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles(theme => (
    {
        Left: {
          background: "#333"
        },
        Wrapper: {
            height: "100%",
            display: "flex",
            alignItems: "center"
        }
    }
));


/**
 * @return {*}
 * @constructor
 */
const LandingView = () => {
    const classes = useStyles();
    return (
        <div className={classes.Wrapper}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4} lg={4} className={classes.Left}>
                    <Sidebar />
                </GridItem>
                <GridItem xs={12} sm={12} md={8} lg={8}>
                    <Content />
                </GridItem>
            </GridContainer>
        </div>
    )
};

export default LandingView;