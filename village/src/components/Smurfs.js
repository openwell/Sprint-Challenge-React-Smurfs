import React, { Component } from 'react';
import './Smurfs.css'
import Smurf from './Smurf';

class Smurfs extends Component {
  pageByIdHandler=(id)=>{
    this.props.history.push('/smurfs/'+ id)
  }
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                singlePage={this.pageByIdHandler}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
