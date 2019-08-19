import React from "react";

import ResidentialPricing from "../../schedules/ResidentialPrices";
import SmallBusinessPrices from "../../schedules/SmallBusinessPrices";

import Typography from "@material-ui/core/Typography"

export default function Schedules() {
    return (
        <div>
            <Typography variant={"h3"}>Pricing Settings</Typography>
            <div>
                <Typography variant={"h5"}>Residential</Typography>
                <ResidentialPricing />
            </div>
            <div>
                <Typography variant={"h5"}>Small Businesses</Typography>
                <SmallBusinessPrices />
            </div>
        </div>
    )
}