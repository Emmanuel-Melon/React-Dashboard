import React, { Component } from 'react';

import { compose } from "recompose";
import { Typography }from "@material-ui/core";

/**
 * styles
 */
import { withStyles } from "@material-ui/core/styles";
const logoutStyles = theme => ({
    Sidebar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        alignBasis: "auto"
    },
    Benefits: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

});



class Sidebar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            clicked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        // this.props.firebase.doSignOut();
        this.props.history.push("/landing");
    }

    render () {
        const { classes } = this.props;
        return (
            <div className={classes.Sidebar}>
                <div>
                    <Typography variant={"h3"} component={"h1"}>Yonja Admin</Typography>
                    <div className={classes.Benefits}>
                        <ul>
                            <li>Employee Management</li>
                            <li>Schedules Management</li>
                            <li>Record Keeping</li>
                            <li>Notifications</li>
                            <li>Data Analysis</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default compose(
    withStyles(logoutStyles)
)(Sidebar);