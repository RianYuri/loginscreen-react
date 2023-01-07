import React from "react";
import "./Button.css";
import Skip from "../Skip/Skip";
const Continue = (props) => {
  return (
    <div className="continue">
      <button
        type="button"
        className="continue__button"
        onClick={props.onButton}
      >
        {props.buttonScreen}
      </button>
    </div>
  );
};

export default Continue;
