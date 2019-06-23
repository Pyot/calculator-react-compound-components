import React, { Component } from "react";

import "./styles.css";

class Inputs extends Component {
  getValue = e => {
    console.log(e.target.value);
    console.log(this.state);
    this.props.inputUpdater(parseInt(e.target.value));
  };

  render() {
    return (
      <>
        <input type="number" />
      </>
    );
  }
}

export default Inputs;
