import React from "react";
import { BrowserRouter as Router, withRouter, NavLink } from "react-router-dom";

import GridContainer from "../components/Grid/GridContianer";
import GridItem from "../components/Grid/GridItem";

import ListAgents from "../agents/ListAgents";
import FilterAgents from "../agents/FilterAgents";
import Greeting from "../components/Greetings/Greetings";

// communicating to a parent via an event?
// sounds like a plan?
const users = [
    {
        id: 1,
        name: "Emmanuel Gatwech"
    },
    {
        id: 2,
        name: "Kengo Louis"
    },
    {
        id: 3,
        name: "Atem Aguer"
    },
    {
        id: 4,
        name: "Vibm Mayanja"
    }
];

class UsersView extends React.Component {
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
                        <GridItem xs={12} sm={12} md={3} lg={9}>
                            <div>
                                <ListAgents />
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
        )
    }
};

export default UsersView;

