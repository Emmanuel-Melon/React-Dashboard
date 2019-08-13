import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Spinner from "../components/Spinners/Spinner";

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
    avatar: {
        background: "#81C784"
    },
    root: {
        width: '100%',
        background: "#fff",
        padding: 16,
        marginBottom: 16
    },
    ContactDetail: {
        borderRadius: 8,
        "&:hover": {
            background: "#ebfaec",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);",
            cursor: "pointer"
        },
    }
});

class CollectionDays extends Component {

    constructor (props) {
        super(props);
        this.state = {
            days: [],
            isLoading: true
        }
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        const res = await fetchData("provider/GarbageCollectors/homeklin");
        let data = res.data.provider || [];
        const days = data.collectionDays || [];
        console.log(days);
        this.setState({ isLoading: false, days });
    }

    render () {
        const { classes } = this.props;
    return (
        <List
            className={classes.root}
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Collection Days
                </ListSubheader>
            }
        >
            {
                this.state.days.map(index => {
                    return (
                        <ListItem className={classes.ContactDetail}>
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={index}
                            />
                        </ListItem>
                    )
                })
            }
        </List>
    );
}
}

export default withStyles(styles)(CollectionDays);