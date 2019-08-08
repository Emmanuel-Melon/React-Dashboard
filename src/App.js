import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";

/**
 * views
 */
import HomeView from "./views/HomeView";
import ProfileView from "./views/ProfileView";
import SettingsView from "./views/SettingsView";
import UsersView from "./views/UsersView";

const Emma = () => {
    return (
        <div>
            <h3>Fuck!</h3>
        </div>
    )
}

// route works but only after a refresh!
// works well with exact but requires a refresh
class App extends Component {
  render() {
    return (
        <Router>
            <div  className="App">
                <header>
                    <Nav />
                </header>
                <Route exact path="/" component={HomeView} />
                <Route path="/settings" component={SettingsView} />
                <Route exact path="/users" component={UsersView} />
                <Route exact path="/users/:id" component={ProfileView} />
                <Route path="/users/:id/posts/" component={Emma} />
            </div>
        </Router>
    );
  }
}

export default App;
