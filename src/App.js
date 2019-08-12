import React, { Component } from 'react';

/**
 * material-ui/core
 */
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

/**
 * HOCs
 */
import withAuthentication from "./HOCs/withAuthentication";

/**
 * core components
 */
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

/**
 * views
 */
import AgentsView from "./views/AgentsView";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import LogoutView from "./views/LogoutView";
import NotFoundView from "./views/NotFoundView";
import ProfileView from "./views/ProfileView";
import SchedulesView from "./views/SchedulesView";

/**
 * styles
 */
import "./App.css";
import RegisterUser from './views/Auth/RegistrationView';


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
                        <Route exact path="/login" component={LoginView} />
                        <Route exact path="/logout" component={LogoutView} />
                        <Route exact path="/schedules" component={SchedulesView} />
                        <Route exact path="/agents/:id" component={ProfileView} />
                        <Route exact path="/clients/:id" component={ProfileView} />
                        <Route exact path="/register" component={RegisterUser} />
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

export default withAuthentication(App);
