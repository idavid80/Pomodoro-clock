import React, { useState, useEffect } from "react";

function Reloj(props) {
  const [tiempo, setTiempo] = useState(new Date());

  function actualizarTiempo() {
    setTiempo(new Date());
  }

  useEffect(() => {
    setInterval(actualizarTiempo, 1000);

  }, []);
  return <div className="App">{tiempo.toLocaleTimeString()}</div>;
}
export default Reloj;