// <User key={id} user={user} />
// look at using component thumbnail as links
// also link vs nav link
import React from "react";
import { withRouter, Redirect } from "react-router-dom";

import ClientOverview from "./ClientOverview";

import fetchData from '../services/api';
import ErrorComponent from "../components/Error/ErrorComponent";

import { compose } from "recompose";
import { withStyles } from "@material-ui/core";
const styles = theme => ({
   Clients: {
       display: "flex",
       flexWrap: "wrap"
   }
});

const users = [
    {
        avatar: "https://bo.training/wp-content/uploads/2017/08/employee-training-avatar-full-size-v1.png",
        id: 1,
        name: "Emmanuel Gatwech",
        title: "Garbage Collector"
    },
    {
        avatar: "http://www.learnex.in/wp-content/uploads/2015/12/flat-faces-icons-circle-6.png",
        id: 2,
        name: "Kengo Louis",
        title: "Garbage Collector"
    },
    {
        avatar: "https://www.pngarts.com/files/3/Employee-Avatar-PNG-Free-Download.png",
        id: 3,
        name: "Atem Aguer",
        title: "Garbage Collector"
    },
    {
        avatar: "https://banner2.kisspng.com/20180626/fhs/kisspng-avatar-user-computer-icons-software-developer-5b327cc98b5780.5684824215300354015708.jpg",
        id: 4,
        name: "Vibm Mayanja",
        title: "Garbage Collector"
    },
];


class ListClients extends React.Component {
    state = {
        selectedUser: null,
        isFetching: false,
        data: [],
        error: false,
        notFound: false,
    }

    componentDidMount() {
        // this.handleFetchingAgents();
    }

    handleFetchingAgents = async () => {
        const { error, notFound } = this.state;
        const result = await fetchData('provider/GarbageCollectors/binit/agents');
        const { errorMessage, data } = result;
        this.setState({
            error: errorMessage && !error,
            notFound: (data && data.clients.undefined) && !notFound
        })
    }

    handleClick (id) {
        console.log(id);
        this.setState({ selectedUser: id });
    }
    render () {
        const { error, notFound } = this.state;
        if(this.state.selectedUser) {
            return <Redirect to={`/clients/${this.state.selectedUser}`} />
        }
        const { classes, match } = this.props;
        return (
            <div>
                {
                    (notFound || error) && <ErrorComponent error={notFound}/>
                }
                {
                    !(notFound || error) && (
                        <div className={classes.Clients}>
                            {
                                users.map((user) => {
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
)(ListClients);