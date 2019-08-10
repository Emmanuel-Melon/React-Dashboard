import app from "firebase/app";
import "firebase/auth";

import React from "react";

// TODO: put in environment variables
const firebaseConfig = {
    apiKey: "AIzaSyDtVkA903VZ99JQXuxM78ipt7IkdsZgyvE",
    authDomain: "yonja-777.firebaseapp.com",
    databaseURL: "https://yonja-777.firebaseio.com",
    projectId: "yonja-777",
    storageBucket: "yonja-777.appspot.com",
    messagingSenderId: "201006820255",
    appId: "1:201006820255:web:8b49d28544ad3882"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }

    /**
     *
     * @param email
     * @param password
     * @return {Promise<firebase.auth.UserCredential>}
     */
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    /**
     *
     * @param email
     * @param password
     * @return {Promise<firebase.auth.UserCredential>}
     */
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    /**
     *
     * @return {Promise<void>}
     */
    doSignOut = () => this.auth.signOut();

    /**
     *
     * @param email
     * @return {Promise<void>}
     */
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    /**
     *
     * @param password
     * @return {Promise<void>}
     */
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

// what's this default value?
const FirebaseContext = React.createContext(null);
const FirebaseConsumer = FirebaseContext.Consumer;
const FirebaseProvider = FirebaseContext.Provider;

export default Firebase;
export {
    FirebaseConsumer,
    FirebaseProvider
};
