import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import withFirebase from "../HOCs/withFirebase";
import Spinner from "../components/Spinners/Spinner";

/**
 * @material-ui/core
 */
import {
    Button,
    Input,
    InputLabel,
    InputAdornment,
    FormControl,
    Typography
} from "@material-ui/core";

/**
 * icons
 */
import PasswordIcon from '@material-ui/icons/CreditCard';

/**
 * styles
 */
import { withStyles } from "@material-ui/core/styles";
const loginStyles = theme => ({
    Button: {
        background: "#e08c05",
        margin: 8
    },
    ButtonArea: {
        display: "flex",
        alignItems: "center",
        flex: 1
    },
    Form: {
        display: "flex",
        justifyContent: "space-between",
        padding: 32,
        minWidth: 360,
    },
    FormControl: {
        display: "block",
        width: "80%",
        margin: 8
    },
    InputAdornment: {
        color: "#e08c05"
    },
    FormContent: {
        display: "flex",
    }
});


/**
 * login form
 */
class LoginForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            price: "",
            isLoading: false,
            error: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value });
    };

    handleFormSubmit = async event => {
        event.preventDefault();
        try {
            this.setState({ isLoading: true });
            this.setState({ isLoading: false });

        } catch (e) {
            console.log("error has occured");
            console.log(e);
            this.setState({ error: e });
            console.log(this.state)
        }
    };
    render () {
        const { classes, firebase } = this.props;
        console.log(firebase);
        const currentUser = firebase.auth.currentUser;
        if(this.state.isLoading === true ) {
            return <Spinner />
        }
        return (
            <div className={classes.Form}>
                <div className={classes.FormContent}>
                    <div>
                        <Typography variant={"h6"}>Current Price</Typography>
                        {
                            (currentUser.displayName === null) ? (
                                <Typography variant={"body1"}>Your email address</Typography>
                            ) : (
                                <Typography variant={"body1"}>{currentUser.email}</Typography>
                            )
                        }
                    </div>
                    <FormControl className={classes.FormControl}>
                        <InputLabel htmlFor="Display Name">Email Address</InputLabel>
                        <Input
                            id="Email Address"
                            type='email'
                            placeholder='Email Address'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            startAdornment={
                                <InputAdornment position="start"  className={classes.InputAdornment}>
                                    <PasswordIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <div className={classes.ButtonArea}>
                        <Button onClick={this.handleFormSubmit} variant="contained" className={classes.Button}>Change</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default compose(
    withFirebase,
    withRouter,
    withStyles(loginStyles)
)(LoginForm);