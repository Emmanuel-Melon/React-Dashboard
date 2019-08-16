import React from "react";

/**
 * core components
 */
import ChangeEmail from "../../components/Account/ChangeEmail";
import Deactivate from "../../components/Account/Deactivate";
import ChangeName from "../../components/Account/ChangeName";
import ChangePhoneNumber from "../../components/Account/ChangePhoneNumber";
import ChangeUsername from "../../components/Account/ChangeUsername";
import ChangeProfileImage from "../../components/Account/ChangeProfileImage";

/**
 * material-ui/core
 */
import {
    Typography
} from "@material-ui/core";
/**
 * styles
 */
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    Change: {
        flex: 2
    },
    Display: {
        display: "flex",
        flex: 1
    },
    Field: {
        display: "flex"
    },
    Sidebar: {
        background: "#fff",

    }
});

export default function PersonalInfo () {
    const classes = useStyles();
    return (
        <div>
            <div>
                <Typography variant={"h5"}>Display Name</Typography>
                <div className={classes.Field}>
                    <div className={classes.Display}>
                        <div>
                            <Typography variant={"h6"}>Current Name</Typography>
                            <Typography variant={"body1"}>You haven't set a Display Name yet.</Typography>
                        </div>
                    </div>
                    <div className={classes.Change}>
                        <ChangeName />
                    </div>
                </div>
            </div>
            <div>
                <Typography variant={"h5"}>Username</Typography>
                <div className={classes.Field}>
                    <div className={classes.Display}>
                        <div>
                            <Typography variant={"h6"}>Current Name</Typography>
                            <Typography variant={"body1"}>Current Name</Typography>
                        </div>
                    </div>
                    <div className={classes.Change}>
                        <ChangeUsername/>
                    </div>
                </div>
            </div>
            <div>
                <Typography variant={"h5"}>Email Address</Typography>
                <div className={classes.Field}>
                    <div className={classes.Display}>
                        <div>
                            <Typography variant={"h6"}>Current Name</Typography>
                            <Typography variant={"body1"}>Current Name</Typography>
                        </div>
                    </div>
                    <div className={classes.Change}>
                        <ChangeEmail />
                    </div>
                </div>
            </div>
            <div>
                <Typography variant={"h5"}>Display Image</Typography>
                <div className={classes.Field}>
                    <div className={classes.Display}>
                        <div>
                            <Typography variant={"h6"}>Current Name</Typography>
                            <Typography variant={"body1"}>Current Name</Typography>
                        </div>
                    </div>
                    <div className={classes.Change}>
                        <ChangeProfileImage />
                    </div>
                </div>
            </div>
            <div>
                <Typography variant={"h5"}>Phone Number</Typography>
                <div className={classes.Field}>
                    <div className={classes.Display}>
                        <div>
                            <Typography variant={"h6"}>Current Name</Typography>
                            <Typography variant={"body1"}>Current Name</Typography>
                        </div>
                    </div>
                    <div className={classes.Change}>
                        <ChangePhoneNumber />
                    </div>
                </div>
            </div>
            <div>
                <Typography variant={"h5"}>Deactivate Account</Typography>
                <div className={classes.Field}>
                    <div className={classes.Display}>
                        <div>
                            <Typography variant={"body1"}>You can always reactivate later</Typography>
                        </div>
                    </div>
                    <div className={classes.Change}>
                        <Deactivate />
                    </div>
                </div>
            </div>

        </div>
    )
}