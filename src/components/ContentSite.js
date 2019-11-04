import React from "react";
import Bokeh from "./Bokeh";
import CardVisit from "./CardVisit";
import Skill from "./Skill";
import "../Sass/avatar.scss";
import Portfolio from "./Portfolio";
import Experience from "./Experience";

const ContentSite = () => {
  return (
    <div>
      <div id="overBokeh">
        <CardVisit />
        <Skill />
        <div className="experience">
          <Experience />
        </div>
        <Portfolio />
      </div>
      <Bokeh />
    </div>
  );
};

export default ContentSite;
