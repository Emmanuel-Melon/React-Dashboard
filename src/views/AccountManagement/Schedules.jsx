import React from "react";

import AddSchedule from "../../schedules/AddSchedule";
import Typography from "@material-ui/core/Typography";

export default function Schedules() {
    return (
        <div>
            <Typography variant={"h3"}>My Schedules</Typography>
            <AddSchedule />
        </div>
    )
}