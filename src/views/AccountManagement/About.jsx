import React from "react";

import Typography from "@material-ui/core/Typography";
import { AuthConsumer } from "../../services/auth";

export default function VerifyAccount() {
    return (
        <AuthConsumer>

            { authUser => {
               return (authUser === null) ? (
                    <Typography variant={"h3"}>
                        So Empty!
                    </Typography>
                ) : (
                    <div>
                        <Typography variant={"h3"}>
                            About {authUser.displayName}
                        </Typography>
                        <Typography variant={"body`"}>
                            A Yonja partner in keeping Uganda clean.
                        </Typography>
                    </div>
                )
            }}
        </AuthConsumer>
    )
}