import React, { useState } from "react";
import "./App.css";
import Img1 from "./assets/Img1.svg";
import Stepper from "./components/Stepper/Stepper";
import Continue from "./components/Buttons/Buttons";
import Page2 from "./components/page/Page2/Page2";
import Page3 from "./components/page/Page3/Page3";
import Skip from "./components/Skip/Skip";


function App(props) {
  const [page, setPage] = useState(1);
  const nextPage = () => {
    setPage(page + 1);
  };
  const skipPage = () => {
    setPage(3);
  };
if (page === 4){
  setPage(1);
}
  return (
    <>
      {page ===  1 && (
        <div className="container">
          <img src={Img1} />
          <h2>Plant lover Community</h2>
          <p>Find gardening enthusiasts from all over the world</p>
          <Stepper stepPosition={page} />
          <Continue onButton={nextPage} buttonScreen='Continue'/>
      <Skip onButton={skipPage}></Skip>

        </div>
      )}
      {page === 2 && <Page2 stepPosition={page} onButton={nextPage} buttonScreen='Continue'/>}
      {page === 3 && <Page3 stepPosition={page} onButton={nextPage} buttonScreen='Get started'/>}
    </>
  );
}

export default App;
