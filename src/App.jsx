import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Article } from "./components/Article/Article";
import axios from "axios";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      const { results } = response.data;

      setNews(results);
    }
    loadNews();
  }, []);

  return (
    <>
      <NavBar />
      <section id="articles">
        {news.map((article) => (
          <Article
            key={article.id}
            articleUrl={article.url}
            title={article.title}
            thumbnail={article.image_url}
            provider={article.news_site}
            description={article.summary}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default App;
