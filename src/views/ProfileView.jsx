import React, { Component } from "react";

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
import ErrorComponent from "../components/Error/ErrorComponent";
import PreloaderAnimation from "../components/Loaders/PreloaderAnimation";
import Spinner from "../components/Spinners/Spinner";

import Button from '@material-ui/core/Button';
import Greeting from "../components/Greetings/Greetings";
/**
 * styles
 */
import { withStyles} from '@material-ui/core/styles';
import {fetchData} from "../services/api";
import CollectionParishes from "../schedules/CollectionParishes";
const styles = theme => (
    {
        Menu: {
            display: "flex",
            justifyContent: "space-between"
        },
        Profile: {
            padding: 32
        }
    }
);

/**
 *
 * @param match
 * @return {*}
 * @constructor
 */
class ProfileView extends Component{

    constructor (props) {
        super(props);
        this.state = {
            address: "Nalule Road, Muyenga",
            dateOfBirth: "1995-11-28",
            id: "0lxTWmaZl0gA97V0JpfsuiVEbUk1",
            name: "Emmanuel Gatwech",
            nationalIdNumber: "12353",
            phoneNumber: "+256779914481",
            serviceProvider: "Homeklin",
            serviceType: "GarbageCollection",
            error: false,
            errorMessage: "",
            isLoading: false
        }
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        let provider = localStorage.getItem("provider");
        provider = JSON.parse(provider);
        const info = provider.data.provider.providerName;
        const res = await fetchData(`agents/${info}`);
        const {
            data,
            err,
            errorMessage
        } = res;
        if(err) {
            this.setState({ error: true, errorMessage: errorMessage, isLoading: false });
        } else {
            console.log(data);
            this.setState({ isLoading: false });
        }
    }

    render () {
        const { classes } = this.props;
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
                        {
                            (this.state.isLoading === true) ? (
                                <Spinner />
                            ) : (
                                <AgentProfileCard />
                            )
                        }
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12} lg={4}>
                        <div>
                            {
                                (this.state.isLoading === true) ? (
                                    <PreloaderAnimation />
                                ) : (
                                    <AgentDocuments/>
                                )
                            }
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12} lg={4}>
                        {
                            (this.state.isLoading === true) ? (
                                <PreloaderAnimation />
                            ) : (
                                <AgentUpcomingTaskSummary />
                            )
                        }
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
};

export default compose(
    privateRoute,
    withStyles(styles)
)(ProfileView);