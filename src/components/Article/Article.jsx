import React from "react";

import "./Article.css";

export const Article = ({
  articleUrl,
  thumbnail,
  description,
  title,
  provider,
}) => {
  return (
    <article>
      <img src={thumbnail} alt={description} />
      <div className="article-infos">
        <h2>
          <a href={articleUrl} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h2>
        <h3>{provider}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};
