import React from "react";

/**
 * grid
 */
import GridContainer from "../components/Grid/GridContianer";
import GridItem from "../components/Grid/GridItem";

/**
 * core components
 */
import Completed from "../schedules/CompletedSchedulesSummary";
import Maps from "../components/Maps/Maps";
import Upcoming from "../schedules/UpcomingSchedulesSummary";
import Greeting from "../components/Greetings/Greetings";
/**
 * styles
 */
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles(theme => (
    {
        Content: {
            marginBottom: 16
        }
    }
));


/**
 * @return {*}
 * @constructor
 */
const HomeView = () => {
    const classes = useStyles();
    return (
        <div>
            <div>
                <Greeting/>
            </div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4} lg={4}>
                    <div className={classes.Content}>
                        <Upcoming/>
                    </div>
                    <div  className={classes.Content}>
                        <Completed />
                    </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={8} lg={8}>
                    <Maps />
                </GridItem>
            </GridContainer>
        </div>
    )
};

export default HomeView;