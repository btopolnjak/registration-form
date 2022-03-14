import React from "react";
import monkey2 from "../images/monkey-02.svg";
import { Button, Input, Steps, Form } from "antd";
import CONFIG from "../config.json";

const basicInfo = CONFIG[0];

function BasicInfo({ values, handleInput, nextStep }) {
  const { Step } = Steps;

  function validateInput(field) {
    if (values[field] === "") return null;
    if (/^(.){2,25}$/.test(values[field]) && /^([^0-9]*)$/.test(values[field]))
      return "success";
    else return "error";
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
        {/* Inputs */}
        {basicInfo.map((input) => {
          return (
            <Form.Item
              validateStatus={validateInput(input.code)}
              hasFeedback
              style={{ marginBottom: "0.5rem" }}
              key={input.code}
            >
              <Input
                addonBefore={input.name}
                value={values[input.code]}
                placeholder={input.name}
                onChange={handleInput(input.code)}
                size="large"
                className="text-center"
              />
            </Form.Item>
          );
        })}
        {/* Navigation buttons */}
        <Button type="primary" onClick={() => nextStep()} block size="large">
          Next
        </Button>
      </div>
    </div>
  );
}

export default BasicInfo;
