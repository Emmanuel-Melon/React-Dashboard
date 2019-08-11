import React, { Component } from 'react';

/**
 * material-ui/core
 */
import { Button }from "@material-ui/core";

/**
 * HOCs
 */
import withFirebase from "../../HOCs/withFirebase";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";

/**
 * styles
 */
import { withStyles } from "@material-ui/core/styles";
const logoutStyles = theme => ({
    Button: {
        background: "#e08c05",
        margin: 8
    },
    ButtonArea: {
        display: "flex",
        justifyContent: "center",
    },

});

class LogoutButton extends Component {

    constructor (props) {
        super(props);
        this.state = {
            clicked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick () {
        try {
            await this.props.firebase.doSignOut();
            this.props.history.push("/");
        } catch (e) {
            this.props.history.push("/landing");
        }
    }

    render () {
        const { classes } = this.props;
        return (
            <div className={classes.ButtonArea}>
                <Button onClick={this.handleClick} variant={"contained"} className={classes.Button}>
                    Sign Out
                </Button>
            </div>
        );
    }
}

export default compose(
    withFirebase,
    withRouter,
    withStyles(logoutStyles)
)(LogoutButton);