import React from "react";
import "./Pomodoro.css";

const CuentaAtras = (props) => {

  const display = (digito) => digito.toString().padStart(2, "0");

  return (
    <div className="temporizador">
      <h3>{props.metodo === true ? "Trabajando" : "Descansando"}</h3>
      <p>
        {display(props.minutos)}:{display(props.segundos)}
      </p>

      </div>
  );
};

export default CuentaAtras;
