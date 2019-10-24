import React from "react";
import Avatar from "./Avatar";

const CardVisit = () => {
  return (
    <div id="card">
      <div id="info">
        <p> Front-end web developer</p>
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
  );
};

export default CardVisit;
