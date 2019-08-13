import React, { Component } from "react";

/**
 * material-ui
 */
import Typography from "@material-ui/core/Typography";

/**
 * core components
 */

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
            isLoading: true
        }
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        const res = await fetchData("provider/GarbageCollectors/homeklin");
        let data = res.data.provider || [];
        const name = data.name || [];
        console.log(name);
        this.setState({ isLoading: false, name });
    }
    render () {
        const { classes } = this.props;
        return (
            <div className={classes.Wrapper}>
                <div className={classes.Content}>
                    {
                        (this.state.name.length === 0) ?
                            (
                                <Typography variant={"h3"}>
                                    Hello, Yonja Customer :)
                                </Typography>
                            ) : (
                                <Typography variant={"h3"}>
                                    Hello, {this.state.name} :)
                                </Typography>
                            )
                    }
                    <Typography variant={"body1"}>
                        Welcome to your dashboard
                    </Typography>
                </div>
            </div>
        )
    }
};

export default withStyles(styles)(Greeting);