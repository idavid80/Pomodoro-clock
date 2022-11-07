import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AlarmIcon from "@mui/icons-material/Alarm";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Configuracion from "./Configuracion";

const color = red[500];
const url = "http://www.sonidosmp3gratis.com/sounds/mario-bros%20vida.mp3";
const sonido = new Audio(url);

const Pomodoro = () => {
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [sesiones, setSesiones] = useState(0);
  const [metodo, setMetodo] = useState();
  const [pausa, setPausa] = useState(true);
  const [trabajo, setTrabajo] = useState(25);
  const [descanso, setDescanso] = useState(5);
  const [ciclos, setCiclos] = useState(4);

  function reset() {
    window.location.reload()
  }
  if (segundos === 0 && minutos === 0) {
    sonido.play();
  }

  function pausarTiempo() {
    setPausa(!pausa);
  }

  function reiniciarTiempo() {
    if (sesiones === 0) {
      setSesiones(ciclos);
      //setSegundos(trabajo); activar segundos y quitar minutos para depurar
      setMinutos(trabajo);
      setPausa(false);
      setMetodo(true);
    }

    if (segundos === 0 && minutos === 0) {
      setMetodo(!metodo);

      if (sesiones > 0) {
        setSesiones(sesiones - 1);
      } else setDescanso(descanso*2);
    }
    //setSegundos(metodo === true ? descanso : props.trabajo); activar segundos y quitar minutos para depurar
    setMinutos(metodo === true ? descanso : trabajo);
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
    <Container fixed maxWidth="sm" justifyContent="center" alignItems="center">
            <Stack
        direction="column"
        spacing={1}
        justifyContent="center"
        alignItems="center"
        mt={2}
      >      <Configuracion
      setTrabajo={setTrabajo}
      trabajo={trabajo}
      setDescanso={setDescanso}
      descanso={descanso}
      setCiclos={setCiclos}
      ciclos={ciclos}
    /></Stack>

      <Stack
        direction="column"
        spacing={1}
        justifyContent="center"
        alignItems="center"
        mt={2}
      >
        <Typography color={color} variant="h6">
          {metodo === true ? "Trabajando" : "Descansando"}
        </Typography>
        <Typography variant="h3" color={color}>
          {display(minutos)}:{display(segundos)}
        </Typography>
        <Button variant="outlined" onClick={reset}>
          Reset
        </Button>
      </Stack>
      <Stack mt={2} direction="row" spacing={3} justifyContent="center">
        <Button variant="outlined" onClick={reiniciarTiempo}>
          {metodo === undefined
            ? "Empezar"
            : segundos === 0 && minutos === 0
            ? "Continuar"
            : "Ciclo " + sesiones}
        </Button>
        <Button variant="outlined" onClick={pausarTiempo}>
          <Tab
            icon={<AlarmIcon />}
            label={pausa === true ? "Reanudar" : "Pausar"}
          />
        </Button>
      </Stack>
    </Container>
  );
};
export default Pomodoro;
