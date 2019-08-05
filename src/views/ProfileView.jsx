import React from "react";

import GridContainer from "../components/Grid/GridContianer";
import GridItem from "../components/Grid/GridItem";

import Typography from '@material-ui/core/Typography';

/**
 * core components
 */
import UserProfileCard from "../users/UserProfileCard";
import UserUpcomingTaskSummary from "../users/UserUpcomingTaskSummary";

import Button from '@material-ui/core/Button';

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
                    <UserProfileCard />
                </GridItem>
                <GridItem xs={12} sm={12} md={12} lg={4}>
                    <UserProfileCard />
                </GridItem>
                <GridItem xs={12} sm={12} md={12} lg={4}>
                    <UserUpcomingTaskSummary />
                    <UserUpcomingTaskSummary />
                </GridItem>
            </GridContainer>
        </div>
    )
};

export default ProfileView;