import React, { Component } from "react";

import "./Article.css";

export class Article extends Component {
  render() {
    return (
      <article>
        <img
          src={this.props.thumbnail}
          alt={this.props.description}
          width={350}
        />
        <div className="article-infos">
          <h2>{this.props.title}</h2>
          <h3>{this.props.provider}</h3>
          <p>{this.props.description}</p>
        </div>
      </article>
    );
  }
}
