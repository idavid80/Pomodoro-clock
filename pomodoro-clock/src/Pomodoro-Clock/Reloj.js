import React, { useState, useEffect } from "react";
import "./Reloj.css";
import Stack from "@mui/material/Stack";

function Reloj() {
  const [tiempo, setTiempo] = useState(new Date());

  function actualizarTiempo() {
    setTiempo(new Date());
  }

  useEffect(() => {
    setInterval(actualizarTiempo, 1000);
  }, []);

  return (
    <Stack
      direction="column"
      spacing={1}
      justifyContent="center"
      alignItems="center"
    >
      <div className="reloj">
        <h3>Reloj</h3>
        <h4>{tiempo.toLocaleTimeString()}</h4>
      </div>
    </Stack>
  );
}
export default Reloj;
