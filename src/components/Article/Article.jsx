import React from "react";

import "./Article.css";

export const Article = ({thumbnail, description, title, provider}) => {
  return (
    <article>
      <img
        src={thumbnail}
        alt={description}
        width={350}
      />
      <div className="article-infos">
        <h2>{title}</h2>
        <h3>{provider}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};
