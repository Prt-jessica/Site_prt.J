import React from "react";
import BookShelf from "../asset/BookShelf.png";

const Portfolio = () => {
  const mouse = () => {
    const hover = document.querySelectorAll(".hover");
  };
  return (
    <div id="portfolio">
      <h2>Portfolio</h2>
      <figure class="book">
        <img src={BookShelf} />

        <figcaption>
          <h3>Bookshelf</h3> <span>bibliothèque interactif de livres</span>
          <a href="https://bookshelf-jmg.netlify.com/" target="_blank"></a>
        </figcaption>
      </figure>
    </div>
  );
};

export default Portfolio;
