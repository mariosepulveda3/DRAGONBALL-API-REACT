import React from "react";
import "../styles/NotFound.scss";

const Notfound = () => {
  return (
    <div className="not-found">
      <div>
        <h2>¡Error al encontrar personaje!</h2>
        <p>Vuelve a intentarlo..</p>
        <img
          src="https://www.tienda-friki.com/wp-content/uploads/220px-Dragonball_4-Star.svg-1.png"
          alt="ball"
        ></img>
      </div>
    </div>
  );
};

export default Notfound;
