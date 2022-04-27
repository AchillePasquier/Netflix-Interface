import dataBase from "../movies_rnexgr.json";

import DisplayCategorie from "./DisplayCategorie";

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

export default Sections;
