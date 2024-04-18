import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Article } from "./components/Article/Article";
import axios from "axios";
import { Footer } from "./components/Footer/Footer";
import { ThreeDots } from "react-loader-spinner";

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

      {news.length ? (
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
      ) : (
        <div className="loading">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="white"
            ariaLabel="loading"
            wrapperClass
          />
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
