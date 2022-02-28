import React from "react";
import monkey2 from "../images/monkey-02.svg";
import { Button, Input, Steps } from "antd";

function BasicInfo({ values, handleInput, nextStep }) {
  const { Step } = Steps;
  const { firstName, lastName } = values;
  function validateName(field) {
    if (/^(.){2,25}$/.test(field) && /^([^0-9]*)$/.test(field)) return true;
  }
  return (
    <div className="background">
      <div className="form-container-basic">
        <img src={monkey2} className="monkey-02" alt="monkey mascot" />
        <h1 className="heading-basic">Welcome!</h1>
        <p className="description-basic margin-bottom-1">
          Welcome to Jungle. My name
          <br /> is <strong>Monkey</strong>, the Jungle mascot. What's your
          name?
        </p>
        {/* Registration steps status */}
        <Steps
          current={values.step - 1}
          size="small"
          responsive={false}
          className="margin-bottom-1"
        >
          <Step title="User" />
          <Step title="Login" />
          <Step title="Terms" />
        </Steps>
        {/* Name input */}
        <Input
          addonBefore="Name"
          value={firstName}
          placeholder="First name"
          onChange={handleInput("firstName")}
          size="large"
          className="text-center"
        />
        {/* Surname input */}
        <Input
          addonBefore="Surname"
          value={lastName}
          placeholder="Last name"
          onChange={handleInput("lastName")}
          size="large"
          className="margin-bottom-1 text-center"
        />
        {/* Navigation buttons */}
        <Button
          type="primary"
          disabled={![firstName, lastName].every(validateName)}
          onClick={() => nextStep()}
          block
          size="large"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default BasicInfo;
