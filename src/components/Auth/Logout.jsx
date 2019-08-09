import React, { Component } from 'react';

import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { Button }from "@material-ui/core";

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

    handleClick () {
        // this.props.firebase.doSignOut();
        this.props.history.push("/landing");
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
    withRouter,
    withStyles(logoutStyles)
)(LogoutButton);