import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AlarmIcon from "@mui/icons-material/Alarm";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

const color = red[500];

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
    <Container maxWidth="sm"  justifyContent="center" alignItems="center">
      <Stack direction="column" spacing={1}  justifyContent="center" alignItems="center">
        <Typography color={color} variant="h6">
          {metodo === true ? "Trabajando" : "Descansando"}
        </Typography>
        <Typography variant="h3" color={color}>
          {display(minutos)}:{display(segundos)}
        </Typography>
        </Stack>
        <Stack direction="row" spacing={1}  justifyContent="center">
        <Button size="large" variant="outlined" onClick={reiniciarTiempo}>
          {metodo === undefined
            ? "Empezar"
            : segundos === 0 && minutos === 0
            ? "Continuar"
            : "Ciclo " + sesiones}
        </Button>
        <Button size="large" variant="outlined" onClick={pausarTiempo}>
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
