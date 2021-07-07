import React, { Component } from 'react';

import { compose } from "recompose";
import {
    Button,
    Typography
} from "@material-ui/core";

/**
 * core components
 */
import Login from "../Auth/Login";

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
            <section className={classes.ButtonArea}>
                <div>
                    <div>
                        <Typography variant={"h5"}>Enjoy a lot of benefits with the Yonja dashboard</Typography>
                        <Typography>Login to your account</Typography>
                    </div>
                    <div>
                        <Login />
                    </div>
                    <div>
                        <Typography variant={"h6"}>
                            Become a Yonja Partner.
                        </Typography>
                        <Typography variant={"body1"}>Submit your company's profile and we'll review it.</Typography>
                        <Button className={classes.Button}>Submit Now</Button>
                    </div>
                </div>
            </section>
        );
    }
}

export default compose(
    withStyles(logoutStyles)
)(Sidebar);