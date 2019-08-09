import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

/**
 * core components
 */
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

/**
 * views
 */
import AgentsView from "./views/AgentsView";
import ClientsView from "./views/ClientsView";
import HomeView from "./views/HomeView";
import NotFoundView from "./views/NotFoundView";
import ProfileView from "./views/ProfileView";
import SchedulesView from "./views/SchedulesView";

/**
 * styles
 */
import "./App.css";


class App extends Component {
  render() {
    return (
        <Router>
            <div  className="App">
                <header>
                    <Nav />
                </header>
                <main>
                    <Switch>
                        <Route exact path="/" component={HomeView} />
                        <Route exact path="/agents" component={AgentsView} />
                        <Route exact path="/clients" component={ClientsView} />
                        <Route exact path="/schedules" component={SchedulesView} />
                        <Route exact path="/agents/:id" component={ProfileView} />
                        <Route exact path="/clients/:id" component={ProfileView} />
                        <Route component={NotFoundView} />
                    </Switch>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </Router>
    );
  }
}

export default App;
