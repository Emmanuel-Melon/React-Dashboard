import React from "react";

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
 * material-ui
 */
import Typgoraphy from "@material-ui/core/Typography";

/**
 * core components
 */
import ClientOverview from "../clients/ClientOverview";
import ListClients from "../clients/ListClients";
import Greeting from "../components/Greetings/Greetings";
/**
 * styles
 */
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles(theme => (
    {
        Wrapper: {
            marginBottom: 16,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
    }
));


/**
 * @return {*}
 * @constructor
 */
const ClientsView = () => {
    const classes = useStyles();
    return (
        <div>
            <div>
                <Greeting/>
            </div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={3} lg={3}>
                    <Typgoraphy variant={"h5"}>
                        My Clients
                    </Typgoraphy>
                    <Typgoraphy variant={"body1"}>
                        This tab will let you keep track of your clients and their profiles.
                    </Typgoraphy>

                </GridItem>
                <GridItem xs={12} sm={12} md={9} lg={9}>
                    <Typgoraphy variant={"h3"}>
                        My Clients
                    </Typgoraphy>
                    <ListClients />
                </GridItem>
            </GridContainer>
        </div>
    )
};

export default compose(
    privateRoute
)(ClientsView);