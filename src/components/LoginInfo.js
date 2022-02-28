import React from "react";
import monkey1 from "../images/monkey-01.svg";
import { Button, Input, Steps, Form } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

function LoginInfo({ values, handleInput, nextStep, previousStep }) {
  const { Step } = Steps;
  const { userName, eMail, password, passwordMatch } = values;
  function validateEmail() {
    if (!eMail) return null;
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail))
      return "success";
    else return "error";
  }
  function validateUsername() {
    if (!userName) return null;
    else if (/^(.){4,20}$/.test(userName)) return "success";
    else return "error";
  }

  function validatePassword() {
    if (!password) return null;
    else if (
      /^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(
        password
      ) &&
      password &&
      password === passwordMatch
    )
      return "success";
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
        <Form.Item validateStatus={validateUsername()} hasFeedback>
          <Input
            value={userName}
            placeholder="Desired username"
            onChange={handleInput("userName")}
            size="large"
          />
        </Form.Item>
        {/* Email input */}
        <Form.Item validateStatus={validateEmail()} hasFeedback>
          <Input
            value={eMail}
            placeholder="E-mail address"
            onChange={handleInput("eMail")}
            size="large"
          />
        </Form.Item>
        {/* Password input */}
        <Form.Item validateStatus={validatePassword()} hasFeedback>
          <Input.Password
            value={password}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            type="password"
            placeholder="Password"
            onChange={handleInput("password")}
            size="large"
          />
        </Form.Item>
        <Form.Item validateStatus={validatePassword()} hasFeedback>
          <Input.Password
            value={passwordMatch}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            type="password"
            placeholder="Password"
            onChange={handleInput("passwordMatch")}
            size="large"
          />
        </Form.Item>
        {/* Navigation buttons */}
        <div className="button-container">
          <Button onClick={() => previousStep()} size="large" block>
            Previous
          </Button>
          <Button
            type="primary"
            disabled={
              validateEmail() && validatePassword() === "success" ? false : true
            }
            onClick={() => nextStep()}
            size="large"
            block
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginInfo;
