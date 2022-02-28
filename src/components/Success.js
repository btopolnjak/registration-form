import React from "react";
import monkey3 from "../images/monkey-03.svg";
import banana from "../images/banana.svg";

function Success() {
  return (
    <div className="background">
      <div className="form-container-success">
        <img src={monkey3} className="monkey-03" alt="monkey mascot" />

        <h1 className="heading-success">Thank you!</h1>
        <p className="description-success">
          You have successfully registered for our Jungle playground and we look
          forward to your attendance! A confirmation e-mail with further details
          will be sent shortly. Good luck!
        </p>
      </div>
    </div>
  );
}

export default Success;
