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
        <div id="CvDownload">
          <a
            href="https://github.com/Prt-jessica/Site_prt.J/raw/master/CV.pdf"
            download="CV_PIROTTE_Jessica"
          >
            <button id="btnDownload">CV download PDF</button>
          </a>
        </div>
        <Portfolio />
      </div>
      <Bokeh />
    </div>
  );
};

export default ContentSite;
