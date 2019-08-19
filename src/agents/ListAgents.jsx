import React from "react";
import { withRouter, Redirect } from "react-router-dom";

import ClientOverview from '../clients/ClientOverview';
import ManageAgents from "./ManageAgents";

import fetchData from '../services/api';
import ErrorComponent from "../components/Error/ErrorComponent";
import _ from "lodash";
import PreloaderAnimation from "../components/Loaders/PreloaderAnimation";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core";


const styles = theme => ({
   Agents: {
       display: "flex",
       flexWrap: "wrap"
   }
});


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
        let provider = localStorage.getItem("provider");
        provider = JSON.parse(provider);
        const info = provider.data.provider.providerName;
        const result = await fetchData(`provider/GarbageCollectors/${info}/agents`);
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
        const { classes } = this.props;

        if(this.state.selectedUser) {
            return <Redirect to={`/agents/${this.state.selectedUser}`} />
        }

        if(this.state.isFetching === true) {
            return (
                <PreloaderAnimation />
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
                {
                    (notFound || error) && <ErrorComponent error={notFound}/>
                }
                {
                    !(notFound || error) && (
                        <div className={classes.Agents}>
                            {
                                this.state.agents.map((user) => {
                                    return (
                                        <div
                                            key={`${user.id}`}
                                            onClick={() => this.handleClick(user.id)}
                                        >
                                            <ClientOverview user={user} />
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

export default compose(
    withRouter,
    withStyles(styles)
)(ListUsers);
