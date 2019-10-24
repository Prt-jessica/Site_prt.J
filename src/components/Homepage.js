import React, { useState } from "react";
import Bokeh from "./Bokeh";
import Logo from "./Logo";
import Smoke from "./smoke";
import ContentSite from "./ContentSite";

const Homepage = () => {
  const [show, setshow] = useState(false);
  if (show === true) {
    return <ContentSite />;
  }
  return (
    <div>
      <Logo
        onClick={() => {
          setshow(true);
        }}
      />
      <Smoke />
      <Bokeh />
    </div>
  );
};
export default Homepage;
