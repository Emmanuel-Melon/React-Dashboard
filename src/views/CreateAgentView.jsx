import React from "react";

/**
 * grid
 */
import GridContainer from "../components/Grid/GridContianer";
import GridItem from "../components/Grid/GridItem";

/**
 * material-ui
 */
import Typography from "@material-ui/core/Typography";

/**
 * core components
 */
import CreateAgent from "../agents/CreateAgent";

/**
 * styles
 */
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles(theme => (
    {
        Content: {
            marginBottom: 16,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        Header: {
            marginBottom: 16
        },
        Wrapper: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 32
        }
    }
));


/**
 * @return {*}
 * @constructor
 */
const CreateAgentView = () => {
    const classes = useStyles();
    return (
        <div className={classes.Wrapper}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4} lg={4}>
                    <Typography variant={"h5"} className={classes.Header}>
                        Creating an agent
                    </Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={8} lg={8}>
                    <div>
                        <div>
                            <CreateAgent />
                        </div>
                    </div>
                </GridItem>
            </GridContainer>
        </div>
    )
};

export default CreateAgentView;