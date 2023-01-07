import React from "react";
import "./App.css";
import Img21 from "./assets/Img1.svg";
import Stepper from "./components/Stepper/Stepper";
import Continue from './components/Buttons/Buttons'

function App() {
  return (
    <div className="container">
      <img src={Img21} />
      <h2>Plant lover Community</h2>
      <p>Find gardening enthusiasts from all over the world</p>
      <Stepper/>
      <Continue />
    </div>
  );
}

export default App;
