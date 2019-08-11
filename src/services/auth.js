import React from 'react';

const AuthUserContext = React.createContext(null);
const AuthConsumer = AuthUserContext.Consumer;
const AuthProvider = AuthUserContext.Provider;

export {
    AuthConsumer,
    AuthProvider
}