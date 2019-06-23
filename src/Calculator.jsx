import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Calculator extends Component {
  state = {
    result: "",
    inputValues: []
  };

  resultUpdater = result => {
    this.setState({ result });
  };

  onSubmit = () => {
    let inputs = document.forms[this.props.name].getElementsByTagName("input");
    let inputsValues = [];
    inputs = Array.from(inputs);
    inputs.map(input => {
      inputsValues.push(input.value);
    });
    return inputsValues;
  };

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        inputValues: this.state.inputValues,
        result: this.state.result,
        resultUpdater: this.resultUpdater,
        state: this.state,
        onSubmit: this.onSubmit
      });
    });

    return <form name={this.props.name}>{children}</form>;
  }
}

export default Calculator;
