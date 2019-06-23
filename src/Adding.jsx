import React, { Component } from "react";

import "./styles.css";

class Adding extends Component {
  add = (a, b) => parseInt(a) + parseInt(b);
  adding = e => {
    e.preventDefault();
    let inputValues = this.props.onSubmit();
    this.props.resultUpdater(this.add(inputValues[0], inputValues[1]));
  };

  render() {
    return (
      <>
        <button onClick={this.adding}>Add</button>
      </>
    );
  }
}

export default Adding;
