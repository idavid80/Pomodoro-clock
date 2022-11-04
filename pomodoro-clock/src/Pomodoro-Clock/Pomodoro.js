import React, { useState, useEffect } from "react";
import "./Pomodoro.css";

const Pomodoro = (props) => {
  let trabajo = 3;
  let descanso = 1;
  let ciclos = 4;
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [sesiones, setSesiones] = useState(0);
  const [metodo, setMetodo] = useState();
  const [pausa, setPausa] = useState(true);

  function pausarTiempo() {
    setPausa(!pausa);
  }

  function reiniciarTiempo() {
    if (sesiones === 0) {
      setSesiones(ciclos);
      setSegundos(trabajo);
      setPausa(false);
      setMetodo(true);
    }

    if (segundos === 0 && minutos === 0) {
      setMetodo(!metodo);
      if (sesiones > 0) {
        setSesiones(sesiones - 1);
      } else descanso = descanso * 2;
    }
    setSegundos(metodo === true ? descanso : trabajo);
    //setMinutos(metodo===true ? trabajo : descanso);
  }

  function cuenta() {
    if (pausa !== true) {
      if (segundos !== 0) {
        setSegundos(segundos - 1);
      }
    }
    if (segundos === 0 && minutos !== 0) {
      setMinutos(minutos - 1);
      setSegundos(segundos + 59);
    }
  }
  useEffect(() => {
    setTimeout(cuenta, 1000);
  });

  const display = (digito) => digito.toString().padStart(2, "0");

  return (
    <div className="temporizador">
      <h3>{metodo === true ? "Trabajando" : "Descansando"}</h3>
      <p>
        {display(minutos)}:{display(segundos)}
      </p>
      <div className="botones">
        <button
          onClick={reiniciarTiempo}
          disabled={segundos === 0 && minutos === 0 ? false : true}
        >
          {metodo === undefined
            ? "Empezar"
            : segundos === 0 && minutos === 0
            ? "Continuar"
            : "Ciclo " + sesiones}
        </button>
        <button onClick={pausarTiempo}>
          {pausa === true ? "Reanudar" : "Pausar"}
        </button>
      </div>
    </div>
  );
};
export default Pomodoro;
