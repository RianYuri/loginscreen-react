import React from "react";
import Img2 from "../../../assets/Img2.svg";
import Stepper from "../../Stepper/Stepper";
import Continue from "../../Buttons/Buttons";
import Skip from "../../Skip/Skip";
const Page2 = (props) => {
  return (
    <div className="container">
      <img src={Img2} />
      <h2>Get fast & safe delivery</h2>
      <p>Get good quality products for your plants </p>
      <Stepper stepPosition={props.stepPosition} />
      <Continue onButton={props.onButton} buttonScreen={props.buttonScreen} />
      <Skip onButton={props.onButton}></Skip>

    </div>
  );
};

export default Page2;
