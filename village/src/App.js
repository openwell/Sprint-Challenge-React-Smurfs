import React, { Component } from "react";
import axios from "axios";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import SmurfDetails from "./components/SmurfDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    this.getSmurfs();
  }
  getSmurfs = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(data => this.setState({ smurfs: data.data }));
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <Router>
        <div className="App">
          <ul className='NavLinks'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/smurf-form">Smurf-Form</NavLink>
          </ul>
          <Switch>
            <Route
              path="/"
              exact
              render={props => <Smurfs smurfs={this.state.smurfs} {...props} />}
            />
            <Route path="/smurf-form" component={SmurfForm} />
            <Route path="/smurfs/:id" component={SmurfDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
