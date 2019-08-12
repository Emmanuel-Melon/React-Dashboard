import React from "react";

/**
 * HOCs
 */
import { compose } from "recompose";
import privateRoute from "../HOCs/PrivateRoute";


import GridContainer from "../components/Grid/GridContianer";
import GridItem from "../components/Grid/GridItem";

import Typography from '@material-ui/core/Typography';

/**
 * core components
 */
import AgentProfileCard from "../agents/AgentProfileCard";
import AgentUpcomingTaskSummary from "../agents/AgentUpcomingTaskSummary";
import AgentDocuments from "../agents/AgentDocuments";
import UploadDocument from "../agents/UploadDocument";

import Button from '@material-ui/core/Button';
import Greeting from "../components/Greetings/Greetings";
/**
 * styles
 */
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles(theme => (
    {
        Menu: {
            display: "flex",
            justifyContent: "space-between"
        },
        Profile: {
            padding: 32
        }
    }
));

/**
 *
 * @param match
 * @return {*}
 * @constructor
 */
const ProfileView = ({ match }) => {
    const classes = useStyles();
    return (
        <div className={classes.Profile}>

            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} className={classes.Menu}>
                    <div>
                        <Typography gutterBottom variant="h5" component="h2">
                            Employee Info
                        </Typography>
                    </div>
                    <div>
                        <Button variant="contained" color="secondary">
                            Actions
                        </Button>
                    </div>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={4}>
                    <AgentProfileCard />
                </GridItem>
                <GridItem xs={12} sm={12} md={12} lg={4}>
                    <div>
                        <AgentDocuments/>
                    </div>
                    <div>
                        <UploadDocument/>
                    </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={12} lg={4}>
                    <AgentUpcomingTaskSummary />
                </GridItem>
            </GridContainer>
        </div>
    )
};

export default compose(
    privateRoute
)(ProfileView);