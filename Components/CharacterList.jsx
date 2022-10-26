export const CharacterList = () => {
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
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