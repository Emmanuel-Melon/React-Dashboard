import React from "react";

/**
 * grid
 */
import GridContainer from "../components/Grid/GridContianer";
import GridItem from "../components/Grid/GridItem";

/**
 * core components
 */
import AddSchedule from "../schedules/AddSchedule";
import CollectionDays from "../schedules/CollectionDays";
import CollectionParishes from "../schedules/CollectionParishes";
import Completed from "../schedules/CompletedSchedulesSummary"
import Upcoming from "../schedules/UpcomingSchedulesSummary"
import Table from "../components/Tables/Table";

import {
    makeStyles,
    Typography
} from "@material-ui/core";
import Greeting from "../components/Greetings/Greetings";
const useStyles = makeStyles({

});

export default function SchedulesView () {
    const classes = useStyles();
    return (
        <div>
            <div>
                <Greeting/>
            </div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4} lg={4}>
                    <div>
                        <CollectionDays />
                    </div>
                    <div>
                        <AddSchedule />
                    </div>
                    <div>
                        <CollectionParishes />
                    </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={8} lg={8}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6} lg={6}>
                            <div>
                                <Completed />
                            </div>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6} lg={6}>
                            <div>
                                <Upcoming />
                            </div>
                        </GridItem>
                    </GridContainer>

                    <div>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={["Date", "Agent", "Client", "Completed", "Declined"]}
                            tableData={[
                                ["27/05/2019", "Binit", "200", "200", "10"],
                                ["27/05/2019", "Kengo Clean", "200","120", "30"],
                                ["27/05/2019", "Cleanex", "50","200", "12"],
                                ["27/05/2019", "Cleanex", "50","200", "12"],
                                ["27/05/2019", "Cleanex", "50","200", "12"],
                                ["27/05/2019", "Cleanex", "50","200", "12"],
                                ["27/05/2019", "Cleanex", "50","200", "12"],
                                ["27/05/2019", "Cleanex", "50","200", "12"],
                                ["27/05/2019", "Cleanex", "50","200", "12"],
                                ["27/05/2019", "Cleanex", "50","200", "12"],
                                ["27/05/2019", "Cleanex", "50","200", "12"],
                                ["27/05/2019", "Cleanex", "50","200", "12"],
                            ]}
                        />
                    </div>
                </GridItem>
            </GridContainer>
        </div>
    )
}