import React, { useState } from "react";
import "./Stepper.css";

const Stepper = (props) => {
  console.log(props.stepPosition);
  return (
    <div className="stepper">
      {props.stepPosition === 1 ? <div id="stepper__color"></div> : <div></div>}
      {props.stepPosition === 2 ? <div id="stepper__color"></div> : <div></div>}
      {props.stepPosition === 3 ? <div id="stepper__color"></div> : <div></div>}
    </div>
  );
};
export default Stepper;
