import React from "react";
import "./styles/App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Article } from "./components/Article/Article";

function App () {
  return (
    <>
      <NavBar />
      <section id="articles">
        <Article
          thumbnail="https://raw.githubusercontent.com/TheSpaceDevs/spaceflightnewsapi/main/.github/profile/assets/snapi_poster.png"
          title="Designing Dashboards"
          provider="NASA"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            consequuntur exercitationem sit!"
        />
        <Article
          thumbnail="https://raw.githubusercontent.com/TheSpaceDevs/spaceflightnewsapi/main/.github/profile/assets/snapi_poster.png"
          title="Vibrant Portraits of 2020"
          provider="SpaceNews"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            consequuntur exercitationem sit!"
        />
        <Article
          thumbnail="https://raw.githubusercontent.com/TheSpaceDevs/spaceflightnewsapi/main/.github/profile/assets/snapi_poster.png"
          title="36 Days of Malayalam type"
          provider="Spaceflight Now"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            consequuntur exercitationem sit!"
        />
      </section>
    </>
  );
};

export default App;