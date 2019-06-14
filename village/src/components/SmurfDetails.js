import React, { Component } from "react";
import "./Smurfs.css";
import Smurf from "./Smurf";
import axios from "axios";
class smurfDetails extends Component {
  state = {
    smurf: null
  };
  componentDidMount() {
    axios.get("http://localhost:3333/smurfs").then(data => {
      this.setState({
        smurf: data.data.filter(
          elem => elem.id === +this.props.match.params.id
        )[0]
      });
    });
  }
  deleteSmurfHandler = () => {
    axios.delete("http://localhost:3333/smurfs/" + this.props.match.params.id);
    window.location.pathname = '/'
  };
  render() {
    let data = null;
    if (this.state.smurf) {
      let { name, id, age, height } = this.state.smurf;
      data = (
        <Smurf
          name={name}
          id={id}
          age={age}
          height={height}
          delete={this.deleteSmurfHandler}
        />
      );
    }
    return <div>{data}</div>;
  }
}

export default smurfDetails;
