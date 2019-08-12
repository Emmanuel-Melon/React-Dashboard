import React from "react";
import { Link, withRouter } from "react-router-dom";

/**
 * HOCs
 */
import { compose } from "recompose";
import privateRoute from "../HOCs/PrivateRoute";

import {
    Button,
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
import ListAgents from "../agents/ListAgents";
import FilterAgents from "../agents/FilterAgents";
import Greeting from "../components/Greetings/Greetings";

/**
 * styles
 */
import { withStyles } from "@material-ui/core";

const styles = theme => (
    {
        Content: {
            marginBottom: 16,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        Button: {
            background: "#FEA30D",
            width: "100%",
            marginTop: 8
        }
    }
);


class AgentsView extends React.Component {
    constructor(props) {
        super(props);
        this.createAgent = this.createAgent.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (id) {
        console.log(this.props);
        console.log(id);
        // this.props.history.push(`/users/${id}`);
    }

    createAgent () {
        console.log("creating an agent");
        this.props.history.push(`/agents/create`);
    }
    render() {
        const { classes, match } = this.props;
        return (
                <div>
                    <div>
                        <Greeting/>
                    </div>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={3} lg={3}>
                            <FilterAgents />
                            <Button onClick={this.createAgent} className={classes.Button}>Create an Agent</Button>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={9} lg={9}>
                            <Typography variant={"h3"}>
                                Agents
                            </Typography>
                            <ListAgents />
                        </GridItem>
                    </GridContainer>
                </div>
        )
    }
};

export default compose(
    privateRoute,
    withRouter,
    withStyles(styles)
)(AgentsView);

