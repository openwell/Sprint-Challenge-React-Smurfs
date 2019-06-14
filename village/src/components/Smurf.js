import React from "react";
import "./Smurfs.css";
const Smurf = props => {
  return (
    <div
      className="Smurf"
      onClick={props.singlePage ? () => props.singlePage(props.id) : null}
    >
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button
        hidden={!props.delete}
        onClick={props.delete ? props.delete : null}
      >
        delete
      </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
