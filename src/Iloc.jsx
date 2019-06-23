import React, { Component } from "react";

import "./styles.css";

class Iloc extends Component {
  iloc = (a, b) => a * b;
  ilocing = e => {
    e.preventDefault();
    let inputValues = this.props.onSubmit();
    this.props.resultUpdater(this.iloc(inputValues[0], inputValues[1]));
  };

  render() {
    return (
      <>
        <button onClick={this.ilocing}>Iloc</button>
      </>
    );
  }
}

export default Iloc;
