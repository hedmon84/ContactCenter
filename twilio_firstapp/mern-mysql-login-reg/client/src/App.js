import React, { Component } from 'react'
import * as FlexWebChat from "@twilio/flex-webchat-ui";
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import webChatConfiguration from './webchat-appConfig'
import { listNewPositions } from './services/newPositionService';

class App extends Component {

  componentDidMount() {

    listNewPositions().then(positions => {
      const config = webChatConfiguration;
      const newPositions = positions
        .map(p => ({ value: p.name, label: p.name, selected: false }));

      config.preEngagementConfig
        .fields
        .find(element => element.label === 'opportunities')
        .options
        .push(...newPositions);

      return FlexWebChat.Manager.create(config);
    })
      .then(manager => this.setState({ manager }))
      .catch(error => this.setState({ error }));
  }

  state = {};

  render() {
    const { manager, error } = this.state;

    if (manager) {
      return (
        <Router>
          <div className="App">
            <FlexWebChat.ContextProvider manager={manager}>
              <FlexWebChat.RootContainer />
            </FlexWebChat.ContextProvider>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
            </div>
          </div>
        </Router>
      );
    }

    if (error) {
      console.error("Failed to initialize Flex Web Chat", error);
    }

    return null;
  }
}

export default App
