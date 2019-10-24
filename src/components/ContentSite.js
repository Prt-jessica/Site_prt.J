import React from "react";
import Bokeh from "./Bokeh";
import CardVisit from "./CardVisit";
import "../Sass/avatar.scss";

const ContentSite = () => {
  return (
    <div>
      <div id="overBokeh">
        <CardVisit />
      </div>
      <Bokeh />
    </div>
  );
};

export default ContentSite;
