import React from "react";
const Avatar = () => {
  let classes_to_remove = [
    "look-right",
    "look-left",
    "look-down",
    "look-up",
    "look-down-right",
    "look-down-left",
    "look-up-right",
    "look-up-left"
  ];

  const removeClasses = () => {
    let head = document.querySelector(".head");
    let hair = document.querySelector(".hair");
    let neck = document.querySelector(".neck");
    for (let x = 0; x < classes_to_remove.length; x++) {
      head.classList.remove(classes_to_remove[x]);
      hair.classList.remove(classes_to_remove[x]);
      neck.classList.remove(classes_to_remove[x]);
    }
  };

  const direction = e => {
    //look left
    let head = document.querySelector(".head");
    let hair = document.querySelector(".hair");
    let neck = document.querySelector(".neck");
    if (e.clientX <= window.innerWidth / 2) {
      removeClasses();

      head.classList.add("look-left");
      hair.classList.add("look-left");
      neck.classList.add("look-left");
    }
    //look right
    if (e.clientX >= window.innerWidth - window.innerWidth / 2) {
      removeClasses();

      head.classList.add("look-right");
      hair.classList.add("look-right");
      neck.classList.add("look-right");
    }
    //look down
    if (e.clientY >= window.innerHeight - window.innerHeight / 2.5) {
      removeClasses();

      head.classList.add("look-down");
      hair.classList.add("look-down");
      neck.classList.add("look-down");
    }

    // look up
    if (e.clientY <= window.innerHeight / 2.5) {
      removeClasses();

      head.classList.add("look-up");
      hair.classList.add("look-up");
      neck.classList.add("look-up");
    }

    // look down right
    if (
      e.clientY >= window.innerHeight - window.innerHeight / 2.5 &&
      e.clientX >= window.innerWidth - window.innerWidth / 3
    ) {
      removeClasses();

      head.classList.add("look-down-right");
      hair.classList.add("look-down-right");
      neck.classList.add("look-down-right");
    }

    // look down left
    if (
      e.clientY >= window.innerHeight - window.innerHeight / 2.5 &&
      e.clientX <= window.innerWidth / 3
    ) {
      removeClasses();

      head.classList.add("look-down-left");
      hair.classList.add("look-down-left");
      neck.classList.add("look-down-left");
    }

    // look up right
    if (
      e.clientY <= window.innerHeight / 2.5 &&
      e.clientX >= window.innerWidth - window.innerWidth / 3
    ) {
      removeClasses();

      head.classList.add("look-up-right");
      hair.classList.add("look-up-right");
      neck.classList.add("look-up-right");
    }

    // look down left
    if (
      e.clientY <= window.innerHeight / 2.5 &&
      e.clientX <= window.innerWidth / 3
    ) {
      removeClasses();

      head.classList.add("look-up-left");
      hair.classList.add("look-up-left");
      neck.classList.add("look-up-left");
    }

    if (
      e.clientX > window.innerWidth / 3 &&
      e.clientX < window.innerWidth - window.innerWidth / 3 &&
      e.clientY > window.innerHeight / 2.5 &&
      e.clientY < window.innerHeight - window.innerHeight / 2.5
    ) {
      removeClasses();
    }
  };
  window.addEventListener("mousemove", function(e) {
    direction(e);
  });

  return (
    <div className="avatar">
      <div class="container">
        <div class="me">
          <div class="hair"></div>
          <div class="clothes">
            <div class="jumper"></div>
          </div>
          <div class="neck"></div>
          <div class="head">
            <div class="bangs"></div>
            <div class="eyes1"> </div>
            <div class="eyes2"></div>
            <div class="mouth">
              <div class="tongue"></div>
            </div>
          </div>
        </div>
        <div class="mouse">
          <i class="fa fa-mouse-pointer" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
