import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import ImageIcon from '@material-ui/icons/LocationCity';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/Smartphone';
import ListSubheader from "@material-ui/core/ListSubheader";

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    avatar: {
        background: "orange"
    },
    root: {
        width: '100%',
        background: "#fff",
        padding: 16
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

class CollectionParishes extends Component {

    constructor (props) {
        super(props);
        this.state = {
            parishes: [],
            isLoading: true
        }
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        const res = await fetchData("provider/GarbageCollectors/homeklin");
        let data = res.data.provider || [];
        const parishes = data.parishes || [];
        console.log(parishes);
        this.setState({ isLoading: false, parishes });
    }

    render () {
        const {classes} = this.props;
        return (
            <List
                className={classes.root}
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Parishes
                    </ListSubheader>
                }
            >
                {
                    this.state.parishes.map(index => {
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

export default withStyles(styles)(CollectionParishes);