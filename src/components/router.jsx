import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Voicemail from "./voicemail";
import VmBox from "./vmBox";
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/MessageList/:vmBoxId" component={Voicemail} />
          <Route exact path="/" component={VmBox} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
