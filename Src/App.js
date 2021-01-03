import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importing Page Components - Mudasir Ali

// Imporing Main Pages - Mudasir ALi

import HomePage from "./Components/Pages/Home"
import AboutPage from "./Components/Pages/About"


// END


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Main Pages Urls */}
          <Route path="/" exact component={HomePage} />
          <Route path="/about/" component={AboutPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const appDiv = document.getElementById("app");

render(<App />, appDiv);
