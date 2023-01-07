import React from "react";
import "./Skip.css";

const Skip = (props) => {
  return (
    <button type="button" onClick={props.onButton}>
      <h3>Skip</h3>
    </button >
  );
};

export default Skip;
