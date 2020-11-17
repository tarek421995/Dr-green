import React, { useState, useEffect } from "react";

import "./App.css";
import Home from "./pages/Home.js";
import MessagesApp from "./pages/MessagesApp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat">
            <MessagesApp />
          </Route>
        </Switch>
      </Router>
      <Home />
    </div>
  );
}

export default App;
