import React from "react";
import "./Home.scss";
const Home = () => {
  return (
    <div className="hero">
      <div className="leftText">
        <p className="p1">100% QUALITY, 100% SATISFACTION</p>
        <p className="p2">Where the world comes to shop.</p>
        <p className="p3">
          Life is hard enough already. Let us make it a little easier, Vision of
          Snipshop for a better outlook.
        </p>
        <button className="btn">Shop Now</button>
      </div>

      <div className="rightDiv">
        <img src="../../../assets/images/dslr.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
