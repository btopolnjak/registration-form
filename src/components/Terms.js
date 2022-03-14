import React, { useState } from "react";
import monkey1 from "../images/monkey-01.svg";
import { Button, notification } from "antd";
import submitRegistration from "../utilities/submitRegistration";
import CONFIG from "../config.json";

function Terms({ values, nextStep, previousStep }) {
  function openFailNotification() {
    notification.open({
      message: "Registration failed!",
      description:
        "Registration has failed. Please try again in a few moments. Sorry for inconvenience.",
    });
  }
  let [isLoading, setLoading] = useState(false);
  let { terms } = CONFIG[CONFIG.length - 1][0];
  function handleSubmit() {
    setLoading(true);
    submitRegistration(values)
      .then(() => {
        nextStep();
      })
      .catch(() => {
        openFailNotification();
        setLoading(false);
      });
  }

  return (
    <div className="background">
      <div className="form-container-login">
        <img src={monkey1} className="monkey-01" alt="monkey mascot" />
        {/* Registration steps status */}
        <div className="terms-of-service">
          <h2>Terms of service</h2>
          <p>{terms}</p>
        </div>
        {/* Navigation buttons */}
        <div className="button-container">
          <Button onClick={() => previousStep()} size="large" block>
            Previous
          </Button>
          <Button
            type="primary"
            onClick={() => handleSubmit()}
            size="large"
            block
            loading={isLoading}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Terms;
