import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Calculator from "./Calculator";
import Adding from "./Adding";
import Iloc from "./Iloc";
import Result from "./Result";
import Inputs from "./Inputs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator name={"calculator"}>
          <Inputs />
          <Inputs />
          <Adding />
          <Iloc />
          <Result />
        </Calculator>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
