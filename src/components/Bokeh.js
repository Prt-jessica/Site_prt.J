import React, { Component } from "react";
import Style from "../App.scss";

const bokeh = () => {
  let light = 140;

  let items = [];
  for (let index = 0; index < light; index++) {
    items.push(<div key={index} className="light"></div>);
  }
  return (
    <div className="bokeh" style={Style}>
      {items}
    </div>
  );
};

export default bokeh;
