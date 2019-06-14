import React, { Component } from "react";
import axios from "axios";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      edit: null
    };
  }
  componentDidMount() {
    this.setState({ edit: this.props.edit ? true : false });
  }

  addSmurf = event => {
    event.preventDefault();
    if (!this.state.edit) {
      // add code to create the smurf using the api
      axios.post("http://localhost:3333/smurfs", this.state);
      this.setState({
        name: "",
        age: "",
        height: ""
      });
      window.location.pathname = "/";
    } else {
      axios.put("http://localhost:3333/smurfs/" +this.props.id, this.state);
      this.setState({
        name: "",
        age: "",
        height: ""
      });
      window.location.pathname = "/smurfs/" +this.props.id;
    }
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  editSmurf = (event, id) => {};

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          {!this.state.edit ? (
            <button type="submit">Add to the village</button>
          ) : (
            <button type="submit">Edit to the village</button>
          )}
        </form>
      </div>
    );
  }
}

export default SmurfForm;
