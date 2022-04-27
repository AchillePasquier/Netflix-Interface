import React from "react";
import "./App.css";
import logoNetflix from "./images/logo-netflix.jpeg";
import dataBase from "./movies_rnexgr.json";

console.log(dataBase[0]["category"]);

function App() {
  return (
    <>
      <Header />
      <Sections />
    </>
  );
}

const Header = () => {
  return (
    <header>
      <img alt="Logo Netflix" src={logoNetflix} />
    </header>
  );
};

const Sections = () => {
  return (
    <ul className="categories">
      {dataBase.map((categ, index) => {
        return (
          <DisplayCategorie
            key={index}
            category={categ.category}
            images={categ.images}
          />
        );
      })}
    </ul>
  );
};

const DisplayCategorie = ({ category, images }) => {
  return (
    <>
      <h1>{category}</h1>
      <div className="carousel-movies">
        {images.map((url, index) => {
          return <img alt="movie" src={url} />;
        })}
      </div>
    </>
  );
};

export default App;
