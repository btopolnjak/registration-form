import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo";
import LoginInfo from "./components/LoginInfo";
import Terms from "./components/Terms";
import Success from "./components/Success";
import CONFIG from "./config.json";

const totalSteps = CONFIG.length;
const fieldNames = CONFIG.flat()
  .map((field) => field.code)
  .filter((field) => field !== "terms");
const fieldObject = fieldNames.reduce((a, b) => ({ ...a, [b]: "" }), {});

export class App extends Component {
  state = {
    step: 1,
    ...fieldObject,
  };

  nextStep = () => {
    let { step } = this.state;
    this.setState({ step: ++step });
  };
  previousStep = () => {
    let { step } = this.state;
    this.setState({ step: --step });
  };
  handleInput = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <BasicInfo
            values={this.state}
            handleInput={this.handleInput}
            nextStep={this.nextStep}
          />
        );
      case 2:
        return (
          <LoginInfo
            values={this.state}
            handleInput={this.handleInput}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
          />
        );
      case totalSteps:
        return (
          <Terms
            values={this.state}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
          />
        );
      case totalSteps + 1:
        return <Success />;
    }
  }
}

export default App;
