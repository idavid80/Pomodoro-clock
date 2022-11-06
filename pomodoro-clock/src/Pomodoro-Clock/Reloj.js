import React, { useState, useEffect } from "react";
import "./Reloj.css";

function Reloj() {
  const [tiempo, setTiempo] = useState(new Date());

  function actualizarTiempo() {
    setTiempo(new Date());
  }

  useEffect(() => {
    setInterval(actualizarTiempo, 1000);
  }, []);

  return (
    <div className="reloj">
      <h3>Reloj</h3>
      <h4>{tiempo.toLocaleTimeString()}</h4>
    </div>
  );
}
export default Reloj;
