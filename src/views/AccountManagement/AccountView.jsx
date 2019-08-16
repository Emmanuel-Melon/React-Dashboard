import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

/**
 * grid
 */
import GridContainer from "../../components/Grid/GridContianer";
import GridItem from "../../components/Grid/GridItem";

/**
 * core components
 */
import AccountSidebar from "../../accounts/AccountSidebar";
import PasswordManagement from "./PasswordManagement";
import PersonalInfo from "./PersonalInfo";
import About from "./About";
import Logout from "../LogoutView";

/**
 * styles
 */
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    Content: {
        alignItems: "center",
      display: "flex",
    },
    Sidebar: {
        background: "#fff",
        flexGrow: 1
    },
    Wrapper: {
        display: "flex"
    }
});


/**
 * st
 * @return {*}
 * @constructor
 */
export default function AccountView () {
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.Wrapper}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={3} lg={3} className={classes.Sidebar}>
                        <AccountSidebar />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={9} lg={9} className={classes.Content}>
                            <Route path="Info" component={PersonalInfo} />
                            <Route path="/account/About" component={About} />
                            <Route path="/account/Password" component={PasswordManagement} />
                            <Route path="/account/logout" component={Logout} />
                    </GridItem>
                </GridContainer>
            </div>
        </Router>
    )
}