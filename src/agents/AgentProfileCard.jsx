import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


// icons



import AgentContactInfo from "./AgentContactInfo";
import AgentDataSummary from "./AgentDataSummary";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => (
    {
        AvatarArea: {
            background: "#e08c05",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 16,
            marginBottom: 32
        },
        Avatar: {
            width: 120,
            height: 120,
            border: "solid 0.2em #333",
            position: "relative",
            bottom: "-85px",
            zIndex: 1,
            marginBottom: 32
        },
        card: {
            borderBottom: "solid 0.3em #e08c05",
            width: '100%',
            padding: 0
        },
        media: {
            height: 140,
        },
        root: {

            width: '100%',
            backgroundColor: theme.palette.background.paper,
            "&:hover": {
                boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);",
                cursor: "pointer"
            },
            position: "relative"
        },
        title: {
            color: "orange",
            fontSize: "0.7em"
        }
    }
));

export default function UserProfileCard() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div className={classes.AvatarArea}>
                <Avatar
                    className={classes.Avatar}
                    src="http://www.learnex.in/wp-content/uploads/2015/12/flat-faces-icons-circle-6.png"
                />
            </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Emmanuel Gabriel <span className={classes.title}>(Collector)</span>
                    </Typography>

                    <AgentDataSummary/>
                    <AgentContactInfo/>
                </CardContent>

        </Card>
    );
}