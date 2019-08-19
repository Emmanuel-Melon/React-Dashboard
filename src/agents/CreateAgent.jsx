import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import _ from "lodash";

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
import AccountCircle from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import MapIcon from '@material-ui/icons/Place';
import DateOfBirth from '@material-ui/icons/DateRange';
import NationalICon from '@material-ui/icons/PermIdentity';

/**
 * styles
 */
import { withStyles } from "@material-ui/core/styles";
import API from "../services/api";

// modal
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
const loginStyles = theme => ({
    Button: {
        background: "#FEA30D",
        margin: 8
    },
    FormControl: {
        width: "65%",
        margin: 8
    },
    Form: {
        padding: 8,
        width: "90%",
        display: "flex",
        flexDirection: "column"
    }
});



/**
 * Add Agent
 */
class AddAgent extends Component {
    constructor (props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            dateOfBirth: "",
            nationalIdNumber: "",
            address: "",
            serviceProvider: "",
            serviceType: "",
            error: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = async event => {
        event.preventDefault();
        try {

            let agent = Object.assign({}, this.state, {
                serviceProvider: "homeklin",
                serviceType: "GarbageCollection"
            });
            agent = _.omit(agent, "error");

            let user = await postData("agents/register", agent);
            console.log(user);
            this.props.history.push("/agents");
        } catch (e) {
            console.log(e);
            this.setState({ error: e });
        }

    };

    componentDidMount() {

    }

    render () {
        const { classes } = this.props;
        return (
            <div className={classes.Form}>
                <FormControl className={classes.FormControl}>
                    <InputLabel htmlFor="Email Address">First Name</InputLabel>
                    <Input
                        id="First Name"
                        type='text'
                        placeholder='First Name'
                        name='firstName'
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl className={classes.FormControl}>
                    <InputLabel htmlFor="Password">Last Name</InputLabel>
                    <Input
                        id="Last Name"
                        type='text'
                        placeholder='Last Name'
                        name='lastName'
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl className={classes.FormControl}>
                    <InputLabel htmlFor="Password">Date of Birth</InputLabel>
                    <Input
                        id="Date of Birth"
                        type='text'
                        placeholder='YYYY-MM-DD'
                        name='dateOfBirth'
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        startAdornment={
                            <InputAdornment position="start">
                                <DateOfBirth />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl className={classes.FormControl}>
                    <InputLabel htmlFor="Password">Phone Number</InputLabel>
                    <Input
                        id="Phone Number"
                        type='text'
                        placeholder='Phone Number'
                        name='phoneNumber'
                        value={this.state.phoneNumber}
                        onChange={this.handleInputChange}
                        startAdornment={
                            <InputAdornment position="start">
                                <PhoneIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl className={classes.FormControl}>
                    <InputLabel htmlFor="Password">Address</InputLabel>
                    <Input
                        id="Address"
                        type='Address'
                        placeholder='Address'
                        name='address'
                        value={this.state.address}
                        onChange={this.handleInputChange}
                        startAdornment={
                            <InputAdornment position="start">
                                <MapIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl className={classes.FormControl}>
                    <InputLabel htmlFor="National ID Number">National ID Number</InputLabel>
                    <Input
                        id="National ID Number"
                        type='text'
                        placeholder='National ID Number'
                        name='nationalIdNumber'
                        value={this.state.nationalIdNumber}
                        onChange={this.handleInputChange}
                        startAdornment={
                            <InputAdornment position="start">
                                <NationalICon />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <div>
                    <Button onClick={this.handleFormSubmit} variant="contained" className={classes.Button}>Add Agent</Button>
                </div>
            </div>
        )
    }
}



export default compose(
    withRouter,
    withStyles(loginStyles)
)(AddAgent);


