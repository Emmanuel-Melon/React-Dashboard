import React from "react";

/**
 * core components
 */
import ChangePassword from "../../components/Auth/ChangePassword";

/**
 * material-ui/core
 */
import Typography from "@material-ui/core/Typography";


/**
 * styles
 */
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    Sidebar: {
        background: "#fff",

    }
});


export default function PersonalInfo () {
    return (
        <div>
            <div>
                <Typography variant={"h5"}>
                    Change Password
                </Typography>
                <div>
                    <ChangePassword />
                </div>
            </div>
        </div>
    )
}