import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import {
    Avatar,
    Card,
    CardHeader,
    CardContent,
    Typography
} from '@material-ui/core';

import { fetchData } from "../services/api";

/**
 * icons
 */
import ImageIcon from '@material-ui/icons/Event';
import ListSubheader from "@material-ui/core/ListSubheader";

/**
 * styles
 */
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    card: {
        minWidth: 275,
        borderBottom: "solid 0.3em #e08c05"
    },
    title: {
        fontSize: 14,
    },
    centered: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    Figure: {
        color: "#e08c05"
    }
});

class CollectionDays extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    render () {
        const { classes, trips } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Trips Done
                        </Typography>
                        <div className={classes.centered}>
                            <Typography variant="h3" component="h2" className={classes.Figure}>
                                {trips}
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(CollectionDays);