import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/CharacterInfo.scss";

const CharacterInfo = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    const getCharacterInfo = async () => {
      const res = await axios(
        `https://dragon-ball-super-api.herokuapp.com/api/characters/${name}`
      );
      console.log(res);
      setCharacter(res.data);
    };

    getCharacterInfo();
  }, []);
  return (
    <div className="character-info">
      <div key={character.id} className="card">
        <h3>{character.name}</h3>
        <div className="img--container">
          <img src={character.imageUrl} alt={character.imageUrl} />
        </div>
        <p>{character.role}</p>
        <p>Universo: {character.universe}</p>
        <p>Especie: {character.specie}</p>
        <button onClick={() => navigate("/characters")}>
          {" "}
          VOLVER A PERSONAJES
        </button>
      </div>
    </div>
  );
};

export default CharacterInfo;
