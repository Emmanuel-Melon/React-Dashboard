import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    ManageUsers: {
        display: "flex",
        justifyContent: "space-between"
    },
    Employee: {
        display: "flex"
    },
    Stats: {
        display: "flex"
    },
    Manage: {
        display: "flex"
    },
    SelectEmployees: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});

class ManageUsers extends Component {
    constructor (props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    handleChange () {
        console.log("handling change");

    }
    render () {
        const { classes } = this.props;
        return (
            <div className={classes.ManageUsers}>
                <div className={classes.SelectEmployees}>
                    <Checkbox
                        checked={this.state.checked}
                        onChange={this.handleChange('checkedA')}
                        value="checkedA"
                        inputProps={{
                            'aria-label': 'primary checkbox',
                        }}
                    />
                </div>
                <div className={classes.Employee}>
                    <h3>Agents</h3>
                </div>
                <div className={classes.Stats}>
                    <h3>Stats</h3>
                </div>
                <div className={classes.Manage}>
                    <h3>Manage</h3>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ManageUsers);