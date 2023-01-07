import React from "react";
import "./Button.css";
import Skip from "../Skip/Skip";
const Continue = () => {
  return (
    <div className="continue">
      <button type="button" className="continue__button" >Continue</button>
      <Skip></Skip>
    </div>
  );
};

export default Continue;
