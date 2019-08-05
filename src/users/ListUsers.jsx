// <User key={id} user={user} />
// look at using component thumbnail as links
// also link vs nav link
import React from "react";
import { withRouter, NavLink, Redirect } from "react-router-dom";

import User from "./UserOverview";
import ManageUsers from "./ManageUsers";

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
        avatar: "https://www.pngarts.com/files/3/Employee-Avatar-PNG-Free-Download.png",
        id: 4,
        name: "Vibm Mayanja",
        title: "Garbage Collector"
    }
];


class ListUsers extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            selectedUser: null
        }
    }

    handleClick (id) {
        console.log(id);
        this.setState({ selectedUser: id });
    }
    render () {
        if(this.state.selectedUser) {
            console.log("yessir!");
            return <Redirect to={`/users/${this.state.selectedUser}`} />
        }
        const { match } = this.props;
        console.log(match);
        return (
            <div>
                <div>
                    <ManageUsers />
                </div>
                <div>
                    {
                        users.map((user) => {
                            return (
                                <div
                                    key={`${user.id}`}
                                    onClick={() => this.handleClick(user.id)}
                                >
                                    <User user={user} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(ListUsers);

// use link or normal div?
// make some parts clickable
/**
 * to={{
                                    pathname: `/users/${user.id}`
                                }}
 */