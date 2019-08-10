import React from "react";
import { FirebaseConsumer } from "../services/firebase";


const withFirebase = Component => {
    return props => {
        return (
            <FirebaseConsumer>
                {firebase => <Component {...props} firebase={firebase} />}
            </FirebaseConsumer>
        );
    }
};

export default withFirebase;