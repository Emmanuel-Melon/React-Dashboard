import React from "react";
/**
 * HOCs
 */
import withFirebase from "./withFirebase";

/**
 * contexts
 */
import { AuthProvider } from "../services/auth";

/***
 *
 * @param Component
 * @param rest
 * @return {*}
 * @constructor
 */
const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                authUser: null
            }
        }
        /**
         * lifecycle hooks
         */
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
                (authUser !== null || authUser !== undefined )
                    ? this.setState({ authUser })
                    : this.setState({ authUser: null });
            });
        }

        componentWillUnmount() {
            // unhook to avoid potential memory leaks
            this.listener();
        }

        render () {
            return (
                <AuthProvider value={this.state.authUser}>
                    <Component {...this.props} />
                </AuthProvider>
            );
        }
    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;