import React, { useState } from "react";

export const Card = ({ character }) => {
  const [characterList, setCharacterList] = useState([]);

  const { id, name, status } = character;

  return (
    <div>
      <h2>id: {id}</h2>
      <h3>name: {name}</h3>
      <p>status: {status}</p>
    </div>
  );
};

export default Card;
