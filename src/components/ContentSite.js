import React from "react";
import Bokeh from "./Bokeh";
import CardVisit from "./CardVisit";
import Skill from "./Skill";
import "../Sass/avatar.scss";
import Portfolio from "./Portfolio";

const ContentSite = () => {
  return (
    <div>
      <div id="overBokeh">
        <CardVisit />
        <Skill />
        <Portfolio />
      </div>
      <Bokeh />
    </div>
  );
};

export default ContentSite;
