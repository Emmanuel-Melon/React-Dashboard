import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


// icons



import UserContactInfo from "./UserContactInfo";
import UserDataSummary from "./UserDataSummary";

const useStyles = makeStyles(theme => (
    {
        card: {
            maxWidth: 345,
            padding: 0
        },
        media: {
            height: 140,
        },
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            "&:hover": {
                boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);",
                cursor: "pointer"
            }
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
                <CardMedia
                    className={classes.media}
                    image="https://www.pngarts.com/files/3/Employee-Avatar-PNG-Free-Download.png"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Emmanuel Gabriel <span className={classes.title}>(Collector)</span>
                    </Typography>

                    <UserDataSummary/>
                    <UserContactInfo/>
                </CardContent>

        </Card>
    );
}