import React from "react";
import BookShelf from "../asset/BookShelf.png";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2>Portfolio</h2>
      <a href="https://bookshelf-jmg.netlify.com/" target="_blank">
        <img src={BookShelf} id="Bookshelf" />
      </a>
    </div>
  );
};

export default Portfolio;
