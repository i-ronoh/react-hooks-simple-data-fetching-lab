import React, { useState, useEffect } from "react";

const App = () => {
  const [dogCeo, setDogCeo] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogCeo(data.message);
      });
  }, []);
  
  if (!dogCeo) return <p>Loading...</p>;

  return <img src={dogCeo} alt="A Random Dog" />;
}

export default App;
