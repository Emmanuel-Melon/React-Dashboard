import React, { Component } from "react";

import { fetchData } from "../services/api";
import _ from "lodash";

/**
 * HOCs
 */
import { compose } from "recompose";
import privateRoute from "../HOCs/PrivateRoute";


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
import Spinner from "../components/Spinners/Spinner";
import Upcoming from "../schedules/UpcomingSchedulesSummary"
import Table from "../components/Tables/Table";

import Greeting from "../components/Greetings/Greetings";

class SchedulesView extends Component {

    constructor (props) {
        super(props);
        this.state = {
            tableData: [],
            isLoading: true
        }
    }

    async componentDidMount () {

        const res = await fetchData("schedules/provider/deersmart");
        let data = res.data.schedules;
        data = data.map(item => {
            return _.omitBy(item, _.isObject);
        });
        // ["Address", "Service Type", "Location Type", "Amount"]
        data = data.map(item => {
            return _.pick(item, ["address", "serviceType", "locationType", "amount"]);
        });
        data = data.map(item => {
            return Object.values(item);
        });
        console.log(data);

        this.setState(({tableData: data, isLoading: false }));
    }

    render() {
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
                            <CollectionParishes />
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={8} lg={8}>
                        <div>
                            { this.state.tableData.length === 0 ?
                                <Spinner /> : <Table
                                    tableHeaderColor="primary"
                                    tableHead={["Address", "Service Type", "Location Type", "Amount"]}
                                    tableData={this.state.tableData}

                                />}
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default compose(
    privateRoute
)(SchedulesView);