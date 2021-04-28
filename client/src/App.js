import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ContList from "./components/ContList";
import CreateCont from "./components/CreateCont";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              Content App
            </Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Content
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={ContList}></Route>
          <Route path="/create" component={CreateCont}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
