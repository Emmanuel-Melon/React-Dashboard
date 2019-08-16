import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import withFirebase from "../../HOCs/withFirebase";
import Spinner from "../Spinners/Spinner";

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
import EmailIcon from '@material-ui/icons/Email';
import PasswordIcon from '@material-ui/icons/Lock';

/**
 * styles
 */
import { withStyles } from "@material-ui/core/styles";
const loginStyles = theme => ({
    Button: {
        background: "#e08c05",
        margin: 8
    },
    Form: {
        padding: 32,
        minWidth: 360,
    },
    FormControl: {
        width: "100%",
        margin: 8
    },
    InputAdornment: {
        color: "#e08c05"
    }
});


/**
 * login form
 */
class LoginForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            email: "",
            password: "",
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
        this.setState({ isLoading: true });
        try {
            let authUser = await this.props.firebase.doSignInWithEmailAndPassword(this.state.email, this.state.password);
            localStorage.setItem('Authorization', authUser.user.ra);
            this.setState({ isLoading: false });
            this.props.history.push("/");

        } catch (e) {
            console.log("error has occured");
            console.log(e);
            // this.props.history.push();
            this.setState({ error: e });
            console.log(this.state)
        }
    };
    render () {
        const { classes } = this.props;

        if(this.state.isLoading === true ) {
            return <Spinner />
        }
        return (
            <div className={classes.Form}>
                <div>
                    <FormControl className={classes.FormControl}>
                        <InputLabel htmlFor="Password">Old Password</InputLabel>
                        <Input
                            id="Password"
                            type='password'
                            placeholder='Password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            startAdornment={
                                <InputAdornment position="start"  className={classes.InputAdornment}>
                                    <PasswordIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl className={classes.FormControl}>
                        <InputLabel htmlFor="Password">New Password</InputLabel>
                        <Input
                            id="Password"
                            type='password'
                            placeholder='Password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            startAdornment={
                                <InputAdornment position="start"  className={classes.InputAdornment}>
                                    <PasswordIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <div className={classes.ButtonArea}>
                        <Button onClick={this.handleFormSubmit} variant="contained" className={classes.Button}>Change Password</Button>
                    </div>

                    <div>
                        {this.state.error !== null ? <div>
                            <p>Login Failed</p>
                            <p>{this.state.error.message}</p>
                        </div> : null }
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