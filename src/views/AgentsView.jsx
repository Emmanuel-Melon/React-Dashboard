import React from "react";
import { BrowserRouter as Router, withRouter, NavLink } from "react-router-dom";

import GridContainer from "../components/Grid/GridContianer";
import GridItem from "../components/Grid/GridItem";

import ListUsers from "../agents/ListUsers";
import FilterUsers from "../agents/FilterUsers";


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
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12} lg={5}>
                            <FilterUsers />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12} lg={7}>
                            <div>
                                <ListUsers />
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
        )
    }
};

export default UsersView;

