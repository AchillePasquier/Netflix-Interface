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

export default DisplayCategorie;
