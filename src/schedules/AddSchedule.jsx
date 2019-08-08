import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
    IconButton,
    Typography
} from "@material-ui/core";


/**
 * icons
 */
import ImageIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    Action: {
        color: "orange"
    },
    root: {
        width: '100%',
        background: "#fff",
        padding: 16,
        marginTop: 16,
        marginBottom: 16,
        display: "flex"
    },
    IconDiv: {
        flex: 1,
        display: "flex",
        alignItems: "center"
    },
    ActionDiv: {
        flex: 2,
        display: "flex", alignItems: "center"
    },
    Icon: {
        background: "#cef2d0",
        borderRadius: "50%",
        color: "#68c46c",
        fontSize: "1.5em"
    }
}));

export default function FolderList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.IconDiv}>
                <IconButton>
                    <ImageIcon className={classes.Icon}/>
                </IconButton>
            </div>
            <div className={classes.ActionDiv}>
                <Typography variant={"h5"} className={classes.Action}>Add Picking Day</Typography>
            </div>
        </div>
    );
}