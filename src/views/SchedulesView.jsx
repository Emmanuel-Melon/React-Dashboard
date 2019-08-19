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
import CollectionDays from "../schedules/CollectionDays";
import CollectionParishes from "../schedules/CollectionParishes";
import Spinner from "../components/Spinners/Spinner";
import Table from "../components/Tables/Table";
import PreloaderAnimation from "../components/Loaders/PreloaderAnimation";
import Greeting from "../components/Greetings/Greetings";


/**
 * styles
 */
import { withStyles } from "@material-ui/core";
const styles = theme => ({
    content: {
        marginBottom: 16
    }
});

//     ["Client", "Address", "Location Type", "Duration", "Collection Days"]
const customHead = [
    {
        id: "client",
        numeric: false,
        disablePadding: true,
        label: 'Client'
    },
    {
        id: "address",
        numeric: false,
        disablePadding: true,
        label: 'Address'
    },
    {
        id: "locationType",
        numeric: false,
        disablePadding: true,
        label: 'Location Type'
    },
    {
        id: "duration",
        numeric: false,
        disablePadding: true,
        label: 'Duration'
    },
    {
        id: "collectionDays",
        numeric: false,
        disablePadding: true,
        label: 'Collection Days'
    }
];


// username, address, locationType, duration, numberOfPickups
function createData(username, address, locationType, duration, numberOfPickups) {
    return { username, address, locationType, duration, numberOfPickups };
}

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
        // ["Username", "Address", "Completed", "Location Type", "Duration", "Collection Days"]
        data = data.map(item => {
            return _.pick(item, ["username", "address", "locationType", "duration", "numberOfPickups"]);
        });
        data = data.map(item => {
            return Object.values(item);
        });
        const customRows = data.map(item => {
            return createData(...item);
        });

        console.log(customRows)

        this.setState(({tableData: customRows, isLoading: false }));
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>
                    <Greeting/>
                </div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4} lg={4}>
                        <div className={classes.content}>
                            {
                                (this.state.isLoading === true) ? (
                                    <PreloaderAnimation />
                                ) : (
                                    <CollectionDays />
                                )
                            }
                        </div>
                        <div className={classes.content}>
                            {
                                (this.state.isLoading === true) ? (
                                    <PreloaderAnimation />
                                ) : (
                                    <CollectionParishes />
                                )
                            }
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={8} lg={8}>
                        <div>
                            { this.state.tableData.length === 0 ?
                                <Spinner /> : <Table
                                    tableHeaderColor="primary"
                                    tableHead={customHead}
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
    privateRoute,
    withStyles(styles)
)(SchedulesView);