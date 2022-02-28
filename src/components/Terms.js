import React, { useState } from "react";
import monkey1 from "../images/monkey-01.svg";
import { Button, Steps, notification } from "antd";
import submitRegistration from "../utilities/submitRegistration";

function Terms({ values, nextStep, previousStep }) {
  const { Step } = Steps;
  function openFailNotification() {
    notification.open({
      message: "Registration failed!",
      description:
        "Registration has failed. Please try again in a few moments. Sorry for inconvenience.",
    });
  }
  let [isLoading, setLoading] = useState(false);

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
        <Steps
          current={values.step - 1}
          size="small"
          className="margin-bottom-2"
        >
          <Step title="User" />
          <Step title="Login" />
          <Step title="Terms" />
        </Steps>
        <div className="terms-of-service">
          <h2>Terms of service</h2>
          <p>
            his Site and all its Contents are intended solely for personal,
            non-commercial use. Except as expressly provided, nothing within the
            Site shall be construed as conferring any license under our or any
            third party's intellectual property rights, whether by estoppel,
            implication, waiver, or otherwise. Without limiting the generality
            of the foregoing, you acknowledge and agree that all content
            available through and used to operate the Site and its services is
            protected by copyright, trademark, patent, or other proprietary
            rights. You agree not to: (a) modify, alter, or deface any of the
            trademarks, service marks, trade dress (collectively "Trademarks")
            or other intellectual property made available by us in connection
            with the Site; (b) hold yourself out as in any way sponsored by,
            affiliated with, or endorsed by us, or any of our affiliates or
            service providers; (c) use any of the Trademarks or other content
            accessible through the Site for any purpose other than the purpose
            for which we have made it available to you; (d) defame or disparage
            us, our Trademarks, or any aspect of the Site; and (e) adapt,
            translate, modify, decompile, disassemble, or reverse engineer the
            Site or any software or programs used in connection with it or its
            products and services.
          </p>
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
