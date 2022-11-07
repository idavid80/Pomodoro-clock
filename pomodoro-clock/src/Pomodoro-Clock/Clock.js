import React from "react";
import "./Clock.css";

const Clock = () => {

  var fechaHora = new Date();
  let hor = fechaHora.getHours();
  let min = fechaHora.getMinutes();
  let seg = fechaHora.getSeconds();

  return (
    <div className="inicio_trabajo">
        <h3>Hora de Inicio</h3>
      <h4>{`${hor.toString().padStart(2, "0")}:${min
        .toString()
        .padStart(2, "0")}:${seg.toString().padStart(2, "0")}`}</h4>
    </div>
  );
};

export default Clock;
