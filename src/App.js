import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo";
import LoginInfo from "./components/LoginInfo";
import Terms from "./components/Terms";
import Success from "./components/Success";

export class App extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    userName: "",
    eMail: "",
    password: "",
    passwordMatch: "",
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
    const {
      step,
      firstName,
      lastName,
      userName,
      eMail,
      password,
      passwordMatch,
    } = this.state;
    const values = {
      step,
      firstName,
      lastName,
      userName,
      eMail,
      password,
      passwordMatch,
    };
    switch (step) {
      case 1:
        return (
          <BasicInfo
            values={values}
            handleInput={this.handleInput}
            nextStep={this.nextStep}
          />
        );
      case 2:
        return (
          <LoginInfo
            values={values}
            handleInput={this.handleInput}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
          />
        );
      case 3:
        return (
          <Terms
            values={values}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default App;
