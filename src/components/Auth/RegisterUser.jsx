import React from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './RegisterUser.scss';

const useStyles = makeStyles(theme => ({
  Button: {
    background: "#e08c05",
    margin: 8
  },
  Input: {
    margin: theme.spacing(1),
  }
}));


const RegisterUserComponent = () => {
    const classes = useStyles();
    return (
        <div className="auth">
            <h3>Register</h3>
            <div className={classes.Input}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Username" />
                </Grid>
              </Grid>
            </div>
            <div className={classes.Input}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <Email />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Email" />
                </Grid>
              </Grid>
            </div>
            <div className={classes.Input}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <Lock />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Password" />
                </Grid>
              </Grid>
            </div>
            <div>
              <Button  className={classes.Button}>Register</Button>
            </div>
        </div>
    )
};

export default RegisterUserComponent;