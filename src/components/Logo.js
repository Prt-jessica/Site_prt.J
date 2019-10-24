import React from "react";

const Logo = props => {
  return (
    <div className="logo" onClick={props.onClick}>
      <div id="border">
        <p id="bordercontent">
          <span id="name">Prt. J</span>
        </p>
      </div>
    </div>
  );
};
export default Logo;
