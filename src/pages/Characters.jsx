import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Characters.scss";
import { Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      //! Fetch
      // const res = await fetch("https://dragon-ball-super-api.herokuapp.com/api/characters");
      // const resJson = await res.json();
      // console.log(resJson);
      // setCharacters(resJson);
      //? Axios
      const res = await axios(
        "https://dragon-ball-super-api.herokuapp.com/api/characters"
      );
      console.log(res);
      setCharacters(res.data);
    };

    getCharacters();
  }, []);
  return (
    <div className="characters">
      {characters &&
        characters.map((character, index) => {
          return (
            <div key={character.id} className="card">
              <h3>{character.name}</h3>
              <div className="img-container">
                <img src={character.imageUrl} alt={character.imageUrl} />
              </div>
              <div>
                <Link to={`/characters/${character.name}`}>ver mas</Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Characters;
