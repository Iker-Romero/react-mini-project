import React, { useState, useEffect } from "react";
import Card from "./Card";

export const CharacterList = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch("https://rickandmortyapi.com/api/character/");
      const jsonData = await rawData.json();

      setCharacterList(jsonData.results);
    };

    fetchData();
  }, []);

  return (
    <>
      {characterList.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </>
  );
}