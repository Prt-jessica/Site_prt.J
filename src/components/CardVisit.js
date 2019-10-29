import React from "react";
import Avatar from "./Avatar";
import Experience from "./Experience";
const CardVisit = () => {
  return (
    <div id="site">
      <div id="card">
        <div id="info">
          <h1> Front-end web developer</h1>
          <p> Pirotte Jessica</p>
          <p> Rue Fût-voie 64</p>
          <p> Vivegnis</p>
          <p> 0465/90 66 08</p>
          <p> pirotte.jessica@icloud.com</p>
        </div>
        <div id="avatar">
          <Avatar />
        </div>
      </div>
      <div className="experience">
        <Experience />
      </div>
    </div>
  );
};

export default CardVisit;
