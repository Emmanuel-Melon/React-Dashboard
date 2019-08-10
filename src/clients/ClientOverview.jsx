import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";

import AgentDataSummary from "../agents/AgentDataSummary";

const useStyles = makeStyles({
    AvatarArea: {
        background: "#e08c05",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 16
    },
    Avatar: {
        width: 80,
        height: 80,
        border: "solid 0.1em #333"
    },
    Button: {
      background: "#e08c05",
        color: "#fff",
        "&:hover": {
            background: "#e08c05",
        }
    },
    card: {
        borderBottom: "solid 0.3em #e08c05",
        width: 345,
        margin: 8,

    },
});

export default function ClientOverview(props) {
    const classes = useStyles();
    const { user } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <div className={classes.AvatarArea}>
                    <Avatar
                        className={classes.Avatar}
                        src={user.avatar}
                    />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {user.name}
                    </Typography>
                    <AgentDataSummary/>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className={classes.Button}>
                    View Profile
                </Button>
            </CardActions>
        </Card>
    );
}

// try giving the greeting component some border
// try adding that menu thing at the top to modify someone's information
// delete or udpate