import React from "react";
import { BrowserRouter as Router, withRouter, NavLink } from "react-router-dom";

/**
 * HOCs
 */
import { compose } from "recompose";
import privateRoute from "../HOCs/PrivateRoute";

import Typgoraphy from "@material-ui/core/Typography";

import GridContainer from "../components/Grid/GridContianer";
import GridItem from "../components/Grid/GridItem";

import ListAgents from "../agents/ListAgents";
import FilterAgents from "../agents/FilterAgents";
import Greeting from "../components/Greetings/Greetings";

class AgentsView extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (id) {
        console.log(this.props);
        console.log(id);
        // this.props.history.push(`/users/${id}`);
    }
    render() {
        const { match } = this.props;
        return (
                <div>
                    <div>
                        <Greeting/>
                    </div>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={3} lg={3}>
                            <FilterAgents />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={9} lg={9}>
                            <Typgoraphy variant={"h3"}>
                                Agents
                            </Typgoraphy>
                            <ListAgents />
                        </GridItem>
                    </GridContainer>
                </div>
        )
    }
};

export default compose(
    privateRoute
)(AgentsView);

