import React, { useEffect, useState } from "react";

function App() {
  const [image, setIsDogBreeds] = useState();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setIsDogBreeds(data.message))
      .catch((err) => console.log(err, "Error, fetch failed!"));
  }, []);

  if (!image) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Dog Breeds </h1>
      <img src={image} alt="A Random Dog"></img>
    </div>
  );
}

export default App;
