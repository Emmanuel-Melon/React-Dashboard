import React from "react";
import { withRouter, Redirect } from "react-router-dom";

import Agent from "./AgentOverview";
import ManageAgents from "./ManageAgents";

import fetchData from '../services/api';
import ErrorComponent from "../components/Error/ErrorComponent";
import _ from "lodash";
import Spinner from "../components/Spinners/Spinner";


class ListUsers extends React.Component {
    state = {
        selectedUser: null,
        isFetching: false,
        agents: [],
        error: false,
        notFound: false,
    };

    componentDidMount() {
        this.handleFetchingAgents();
    }

    handleFetchingAgents = async () => {
        this.setState({ isFetching: true });
        const { error, notFound } = this.state;
        const result = await fetchData('provider/GarbageCollectors/homeklin/agents');
        const { errorMessage, data = {} } = result;
        let { agents = [] } = data;
        agents = _.values(agents);
        console.log("TCL: ListUsers -> handleFetchingAgents -> agents", agents)
        this.setState({
            agents,
            error: errorMessage && !error,
            isFetching: false,
            notFound: (data && agents.undefined) && !notFound
        });
    };

    handleClick (id) {
        this.setState({ selectedUser: id });
    }
    render () {
        const { error, notFound } = this.state;
        if(this.state.selectedUser) {
            return <Redirect to={`/agents/${this.state.selectedUser}`} />
        }

        if(this.state.isFetching === true) {
            return (
                <Spinner/>
            );
        }

        if (error) {
            return <ErrorComponent message='Data could not be fetched...'/>
        }

        if (notFound) {
            return <ErrorComponent message='No agents added yet...'/>
        }
        return (
            <div>
                <div>
                    <ManageAgents />
                </div>
                {
                    (notFound || error) && <ErrorComponent error={notFound}/>
                }
                {
                    !(notFound || error) && (
                        <div>
                            {
                                this.state.agents.map((user) => {
                                    return (
                                        <div
                                            key={`${user.id}`}
                                            onClick={() => this.handleClick(user.id)}
                                        >
                                            <Agent user={user} />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    )
                }
            </div>
        );
    }
}

export default withRouter(ListUsers);