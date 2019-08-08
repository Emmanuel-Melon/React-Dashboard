import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

/**
 * core components
 */
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

/**
 * views
 */
import HomeView from "./views/HomeView";
import ProfileView from "./views/ProfileView";
import SettingsView from "./views/SettingsView";
import UsersView from "./views/UsersView";
import SchedulesView from "./views/SchedulesView";


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
                <Route exact path="/schedules" component={SchedulesView} />
                <Route exact path="/users/:id" component={ProfileView} />
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
