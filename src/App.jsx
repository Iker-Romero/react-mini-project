import React, { useState } from "react";
import "./App.css";

// const charactersMock = [
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//   },
//   {
//     id: 2,
//     name: "Morty Smith",
//     status: "Alive",
//   },
// ];

const App = () => {
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch("https://rickandmortyapi.com/api/character/");
      const jsonData = await rawData.json();

      setCharacterList(jsonData.results);
    };

    fetchData();
  }, []);

  // React.useEffect(() => {
  //   (async () => {
  //     let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
  //       (res) => res.json()
  //     );

  //     setCharacterList(data.results);
  //   })();
  // }, []);

  return (
    <>
      {characterList.map((character) => (
        <div key={character.id}>
          <h2>{character.id}</h2>
          <h2>{character.name}</h2>
          <h2>{character.status}</h2>
        </div>
      ))}
    </>
  );
};

export default App;
