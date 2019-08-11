import React from "react";
import { withRouter } from "react-router-dom";

import { Avatar, Paper, Typography } from "@material-ui/core";
import { compose} from "recompose";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';



import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    avatar: {
        border: "solid 0.1em #eee",
        width: 80,
        height: 80
    },
    Employee: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        flexGrow:1,
        marginBottom: 16,
        borderRadius: "0.5em"
    },
    EmployeeInfo: {
        display: "flex"
    },
    EmployeeInfoBasic: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 8
    },
    EmployeeStats: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    EmployeeManagement: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    EmployeeList: {

    },
    Separated: {
        marginRight: 8,
    },
    Gray: {
        color: "#757575",
        fontWeight: 400
    }
});

class User extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            avatar: "http://www.learnex.in/wp-content/uploads/2015/12/flat-faces-icons-circle-6.png",
            trips: 0
        }
    }
    render () {
        const { classes, match, user } = this.props;
        return (
            <Paper className={classes.Employee}>
                <div className={classes.EmployeeInfo}>
                    <Avatar
                        src={user.avatar || this.state.avatar}
                        alt={user.name}
                        className={classes.avatar}
                    />
                    <div className={classes.EmployeeInfoBasic}>
                        <div>
                            <Typography variant="h6">
                                {user.name}
                            </Typography>
                            <Typography variant="body1" className={classes.Gray}>
                                {user.title}
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.EmployeeStats}>
                    <div className={classes.EmployeeStatsContent}>
                        <div>
                            <Typography variant="h6">
                                {this.state.trips}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body1" className={classes.Gray}>
                                Trips
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.EmployeeManagement}>
                    <div className={classes.Separated}>
                        <EditIcon color={"primary"}/>
                    </div>
                    <div>
                        <DeleteIcon color={"secondary"}/>
                    </div>
                </div>
                <div>
                    <button>View Profile</button>
                </div>
            </Paper>
        );
    }
}

export default compose(
    withRouter,
    withStyles(styles)
)(User)