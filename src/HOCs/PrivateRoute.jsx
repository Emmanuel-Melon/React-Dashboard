import React from "react";
import Spinner from "../components/Spinners/Spinner";

/**
 * context
 */
import { AuthConsumer } from "../services/auth";

/**
 *
 * @param Component
 * @param rest
 * @return {*}
 * @constructor
 */
const privateRoute = Component => {
    return class PrivateRoute extends React.Component {
        render () {
            return (
                <AuthConsumer>
                    { authUser => {
                        return (
                            <div>
                                {
                                    (authUser !== null) ? (
                                        <Component />
                                    ) : (
                                        <Spinner />
                                    )

                                }
                            </div>
                        )
                    }}
                </AuthConsumer>
            )
        }
    }
};

export default privateRoute;
