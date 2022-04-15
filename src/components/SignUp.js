import React from "react";
import "./SignUp.css";
import comeon from "../assets/come.gif";

const SignUp = () => {
  return (
    <div className="sign-up-section">
      <div className="container">
        {/* first half */}
        <div className="first-half">
          <img src={comeon} />
        </div>

        {/* second half */}
        <div className="second-half">
          <h2>Earn with crypto</h2>
          <p>Earn up to to x amount of rewards with this digital asset.</p>

          <div className="input-container">
            <input type="email" placeholder="Enter email" />
            <button className="btn" type="submit">Join now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
