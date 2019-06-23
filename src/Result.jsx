import React, { Component } from "react";

import "./styles.css";

class Result extends Component {
  render() {
    return (
      <>
        <h1>Result: {this.props.result}</h1>
      </>
    );
  }
}

export default Result;
