import React from "react";
import monkey1 from "../images/monkey-01.svg";
import { Button, Input, Steps, Form } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import CONFIG from "../config.json";

const loginInfo = CONFIG[1];

function LoginInfo({ values, handleInput, nextStep, previousStep }) {
  const { Step } = Steps;

  function validateInput(field) {
    if (!values[field]) return null;
    const regEx = new RegExp(
      loginInfo.find((e) => e.code === field).validators[0].parameters.regex
    );
    if (regEx.test(values[field])) return "success";
    else return "error";
  }

  function validatePassword(field) {
    if (!values[field]) return null;
    const regEx = new RegExp(
      loginInfo.find((e) => e.code === field).validators[0].parameters.regex
    );
    console.log(regEx);
    if (regEx.test(values[field])) return "success";
    else return "error";
  }

  return (
    <div className="background">
      <div className="form-container-login">
        <img src={monkey1} className="monkey-01" alt="monkey mascot" />
        {/* Registration steps status */}
        <Steps
          current={values.step - 1}
          size="small"
          responsive={false}
          className="margin-bottom-2"
        >
          <Step title="User" />
          <Step title="Login" />
          <Step title="Terms" />
        </Steps>
        {/* Username input */}
        {loginInfo.map((input) => {
          switch (input.code) {
            case "userName":
              return (
                <Form.Item
                  hasFeedback
                  validateStatus={validateInput(input.code)}
                  key={input.code}
                >
                  <Input
                    value={values[input.code]}
                    placeholder="Desired username"
                    onChange={handleInput(input.code)}
                    size="large"
                  />
                </Form.Item>
              );
            case "eMail":
              return (
                <Form.Item
                  hasFeedback
                  validateStatus={validateInput(input.code)}
                  key={input.code}
                >
                  <Input
                    value={values[input.code]}
                    placeholder="E-mail address"
                    onChange={handleInput(input.code)}
                    size="large"
                  />
                </Form.Item>
              );
            case "password":
              return (
                <Form.Item
                  hasFeedback
                  validateStatus={validatePassword(input.code)}
                  key={input.code}
                >
                  <Input.Password
                    value={values[input.code]}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    type="password"
                    placeholder="Password"
                    onChange={handleInput(input.code)}
                    size="large"
                  />
                </Form.Item>
              );
            case "passwordMatch":
              return (
                <Form.Item
                  hasFeedback
                  validateStatus={validatePassword(input.code)}
                  key={input.code}
                >
                  <Input.Password
                    value={values[input.code]}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    type="password"
                    placeholder="Password"
                    onChange={handleInput(input.code)}
                    size="large"
                  />
                </Form.Item>
              );
          }
        })}

        {/* Navigation buttons */}
        <div className="button-container">
          <Button onClick={() => previousStep()} size="large" block>
            Previous
          </Button>
          <Button type="primary" onClick={() => nextStep()} size="large" block>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginInfo;
