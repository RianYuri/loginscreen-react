import React from "react";
import Img3 from "../../../assets/Img3.svg";
import Stepper from "../../Stepper/Stepper";
import Continue from "../../Buttons/Buttons";


const Page3  = props => {

    return (
        <div className="container">
          <img src={Img3}/>
          <h2>Buy & Sell Tools</h2>
          <p>Buy & sell good quality products for your beautiful plants </p>
          <Stepper stepPosition={props.stepPosition}/>
          <Continue onButton={props.onButton } buttonScreen={props.buttonScreen}/>
        </div>
      );
}

export default Page3;