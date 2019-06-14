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
      
      <button style={{background: '#2ecc71', outline: 'none'}} hidden={!props.edit} onClick={props.edit ? props.edit : null} >Edit</button>
      <button
      style={{background: '#e74c3c', outline: 'none'}} 
        hidden={!props.delete}
        onClick={props.delete ? props.delete : null}
      >
        Delete
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
