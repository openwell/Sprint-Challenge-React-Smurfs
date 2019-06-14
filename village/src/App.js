import React, { Component } from "react";
import axios from "axios";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(data => this.setState({ smurfs: data.data }));
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/form">Add Smurf</Link>

          <Switch>
            <Route
              path="/"
              exact
              render={props => <Smurfs smurfs={this.state.smurfs} {...props} />}
            />
            <Route path="/form" component={SmurfForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
