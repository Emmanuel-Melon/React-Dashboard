import React, { Component } from "react";
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
import Maps from "../components/Maps/Maps";
import Greeting from "../components/Greetings/Greetings";
import Notifications from "../provider/Notifications";
import PricingInfo from "../provider/PricingInfo";
import Ratings from "../provider/Ratings";
import TripsDone from "../provider/TripsDone";
import ContactInfo from "../provider/ContactInfo";
import ErrorComponent from "../components/Error/ErrorComponent";
import PreloaderAnimation from "../components/Loaders/PreloaderAnimation";
import Spinner from "../components/Spinners/Spinner";

/**
 * material-ui/core
 */
import {
    Typography
} from "@material-ui/core";

/**
 * styles
 */
import { withStyles } from '@material-ui/core/styles';
import {fetchData} from "../services/api";
const styles = theme => (
    {
        Content: {
            marginBottom: 16
        }
    }
);


/**
 * @return {*}
 * @constructor
 */
class HomeView extends Component {

    constructor (props) {
        super(props);
        this.state = {
            collectionDays: [],
            district: "",
            isLoading: true,
            officeLocation: "",
            name: "",
            parishes: [],
            price: [],
            rating: 0,
            serviceLocation: "",
            tripsDone: "",
            error: false,
            errorMessage: ""
        }
    }
    async componentDidMount() {
        this.setState({ isLoading: true });
        let provider = localStorage.getItem("provider");
        provider = JSON.parse(provider);
        const info = provider.data.provider.providerName;
        const res = await fetchData(`provider/GarbageCollectors/${info}`);
        const {
            data,
            err,
            errorMessage
        } = res;
        if(err) {
            this.setState({ error: true, errorMessage})
        } else{
            let provider = data.provider || [];
            const collectionDays = provider.collectionDays || [];
            const district = provider.district || "";
            const name = provider.name || "";
            const officeLocation = provider.officeLocation || [];
            const parishes = provider.parishes || [];
            const price = provider.price || {};
            const rating = provider.rating || 0;
            const serviceLocation = provider.serviceLocation || "";
            const tripsDone = provider.tripsDone || "";
            const info = Object.assign({}, {
                collectionDays,
                district,
                name,
                officeLocation,
                parishes,
                price,
                rating,
                serviceLocation,
                tripsDone
            });

            this.setState({ isLoading: false, ...info });
            console.log(this.state);
        }
    }

    render () {
        const { classes }= this.props;
        const { name, serviceLocation, officeLocation, district } = this.state || {};
        const info = {
            name,
            serviceLocation,
            officeLocation,
            district
        };
        if(this.state.error === true ) {
            return <ErrorComponent message="An error has occurred" />
        }
        return (
            <div>
                <div>
                    <Greeting/>
                </div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4} lg={4}>
                        <Typography variant={"h4"}>
                            Provider Summary
                        </Typography>
                        <Typography variant={"h6"}>
                            A summary of all of your business activities
                        </Typography>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} lg={4}>
                        <div className={classes.Content}>
                            {
                                (this.state.isLoading === true) ? (
                                    <PreloaderAnimation />
                                ) : (
                                    <TripsDone trips={this.state.tripsDone}/>
                                )
                            }
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} lg={4}>
                        <div className={classes.Content}>
                            {
                                (this.state.isLoading === true) ? (
                                    <PreloaderAnimation />
                                ) : (
                                    <Ratings rating={this.state.rating}/>
                                )
                            }
                        </div>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4} lg={4}>
                        <div className={classes.Content}>
                            {
                                (this.state.isLoading === true) ? (
                                    <PreloaderAnimation />
                                ) : (
                                    <ContactInfo info={info} />
                                )
                            }
                        </div>
                        <div className={classes.Content}>
                            {
                                (this.state.isLoading === true) ? (
                                    <PreloaderAnimation />
                                ) : (
                                    <PricingInfo price={this.state.price}/>
                                )
                            }
                        </div>
                        <div  className={classes.Content}>
                            {
                                (this.state.isLoading === true) ? (
                                    <PreloaderAnimation />
                                ) : (
                                    <Notifications />
                                )
                            }
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={8} lg={8}>
                        {
                            (this.state.isLoading === true) ? (
                                <Spinner />
                            ) : (
                                <Maps />
                            )
                        }
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default compose(
    privateRoute,
    withStyles(styles)
)(HomeView);