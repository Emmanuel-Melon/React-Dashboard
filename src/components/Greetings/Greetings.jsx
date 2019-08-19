import React, { Component } from "react";

/**
 * material-ui
 */
import Typography from "@material-ui/core/Typography";

import { AuthConsumer } from "../../services/auth";

/**
 * core components
 */
import ErrorComponent from "../Error/ErrorComponent";

/**
 * styles
 */
import { withStyles } from '@material-ui/core/styles';
import {fetchData} from "../../services/api";

const styles = theme => (
    {
        Content: {
            marginBottom: 16
        },
        Wrapper: {
            background: "white",
            padding: 16,
            display: "flex",
            alignItems: "center",
            height: "100%"
        }
    }
);


/**
 * @return {*}
 * @constructor
 */
class Greeting extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: "",
            error: false,
            errorMessage: ""
        }
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        const res = await fetchData("provider/GarbageCollectors/homeklin");
        const {
            data,
            err,
            errorMessage
        } = res;
        if(err) {
            this.setState({ error: true, errorMessage: errorMessage });
        } else {
            console.log(data);
            const { provider } = data;
            console.log(provider.name);
            const name = provider.name || "";
            this.setState({ isLoading: false, name });
        }
    }
    render () {
        const { classes } = this.props;
        if(this.state.error === true ) {
            return <ErrorComponent message="An error has occurred" />
        }
        return (
            <div className={classes.Wrapper}>
                <div className={classes.Content}>
                    <AuthConsumer>
                        { authUser => {
                            console.log(authUser)
                           return (authUser === null) ?
                                 (
                                    <Typography variant={"h3"}>
                                        Hello, Yonja Customer :)
                                    </Typography>
                                ) : (
                                    <Typography variant={"h3"}>
                                        Hello, {authUser.displayName} :)
                                    </Typography>
                                )
                        }}
                    </AuthConsumer>
                    <Typography variant={"body1"}>
                        Welcome to your dashboard
                    </Typography>
                </div>
            </div>
        )
    }
};

export default withStyles(styles)(Greeting);