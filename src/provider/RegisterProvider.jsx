import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import withFirebase from "../HOCs/withFirebase";
import Spinner from "../components/Spinners/Spinner";
import { postData } from "../services/api";

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
import ServiceType from '@material-ui/icons/Build';
import CompanyName from '@material-ui/icons/Description';
import PasswordIcon from '@material-ui/icons/Lock';
import PhoneIcon from '@material-ui/icons/Smartphone';

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
        justifyContent: "center",
    },
    Form: {
        padding: 32,
        minWidth: 360,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0.3em"
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
            providerName: "",
            email: "",
            password: "",
            isLoading: false,
            error: null,
            phoneNumber: "",
            providerType: "",
            username: ""
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
            let authUser = await this.props.firebase.doCreateUserWithEmailAndPassword(
                this.state.email,
                this.state.password
            );

            const {
                providerName,
                email,
                password,
                phoneNumber
            } = this.state;

            const data = {
                providerName,
                email,
                password,
                phoneNumber,
                providerType: "GarbageCollectors",
                uid: authUser.user.uid
            }

            await this.props.firebase.updateProfile({
                displayName: this.state.providerName
            });

            const newProvider = await postData("provider/register", data);
            console.log(newProvider);


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
                        <InputLabel htmlFor="Email Address">Email Address</InputLabel>
                        <Input
                            id="Email Address"
                            type='email'
                            placeholder='Email Address'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            startAdornment={
                                <InputAdornment position="start" className={classes.InputAdornment}>
                                    <EmailIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl className={classes.FormControl}>
                        <InputLabel htmlFor="Email Address">Phone Number</InputLabel>
                        <Input
                            id="Phone Number"
                            type='text'
                            placeholder='Phone Number'
                            name='phoneNumber'
                            value={this.state.phoneNumber}
                            onChange={this.handleInputChange}
                            startAdornment={
                                <InputAdornment position="start" className={classes.InputAdornment}>
                                    <PhoneIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl className={classes.FormControl}>
                        <InputLabel htmlFor="Password">Password</InputLabel>
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
                        <InputLabel htmlFor="Email Address">Company Name</InputLabel>
                        <Input
                            id="Company Name"
                            type='text'
                            placeholder='Company Name'
                            name='providerName'
                            value={this.state.providerName}
                            onChange={this.handleInputChange}
                            startAdornment={
                                <InputAdornment position="start" className={classes.InputAdornment}>
                                    <CompanyName />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <div className={classes.ButtonArea}>
                        <Button onClick={this.handleFormSubmit} variant="contained" className={classes.Button}>Register</Button>
                    </div>

                    <div>
                        {this.state.error !== null ? <div>
                            <p>Registration Failed</p>
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