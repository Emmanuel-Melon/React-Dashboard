import React from "react";

/**
 * grid
 */
import GridContainer from "../components/Grid/GridContianer";
import GridItem from "../components/Grid/GridItem";

/**
 * core components
 */
import Maps from "../components/Maps/Maps";


/**
 * @return {*}
 * @constructor
 */
const HomeView = () => {
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4} lg={4}>
                    <div>
                        <h3>Upcoming</h3>
                    </div>
                    <div>
                        <h3>Completed</h3>
                    </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={8} lg={8}>
                    <Maps />
                </GridItem>
            </GridContainer>
        </div>
    )
};

export default HomeView;