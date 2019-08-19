import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import './RegisterUser.scss';
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import withFirebase from "../../HOCs/withFirebase"; 


const useStyles = theme => ({
  Button: {
    background: "#e08c05",
    margin: 8
  },
  Input: {
    margin: theme.spacing(1),
  },
  Icon: {
    color: "#e08c05",
  },
  ButtonDiv: {
    display: "flex",
    justifyContent: "center",
},
});

class RegisterUserComponent extends Component {
  state = {
    email: '',
    password: '',
    isLoading: false,
    errorOccured: false,
    errorMessage: ''
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password, errorOccured } = this.state;
    try {
      const newUser = await this.props.firebase.doCreateUserWithEmailAndPassword(email, password);
      localStorage.setItem('Authorization', newUser.user.ra);
      this.props.history.push("/account/complete");
    } catch(error) {
      const { message } = error;
      this.setState({
        errorOccured: !errorOccured,
        errorMessage: message,
      })
    }

  }

  render () {
    const { classes } = this.props;
    const { errorOccured, errorMessage } = this.state;
    return (
      <div className="auth">
          <h3>Register</h3>
          <div className={classes.Input}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <Email className={classes.Icon}/>
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="Email" onChange={this.handleInputChange} name="email"/>
              </Grid>
            </Grid>
          </div>
          <div className={classes.Input}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <Lock className={classes.Icon}/>
              </Grid>
              <Grid item>
                <TextField type="password" id="input-with-icon-grid" label="Password" onChange={this.handleInputChange} name="password"/>
              </Grid>
            </Grid>
          </div>
          <div className={classes.ButtonDiv}>
            <Button  className={classes.Button} onClick={this.handleSubmit}>Register</Button>
          </div>
          <div>
            {
              errorOccured && (
                <div className="auth__error">
                  <p>Registration could not be completed...</p>
                  <p>{errorMessage.toLowerCase()}</p>
                </div>
              )
            }
          </div>
      </div>
    )
  }
};

export default compose(withRouter, withFirebase, withStyles(useStyles))(RegisterUserComponent);
