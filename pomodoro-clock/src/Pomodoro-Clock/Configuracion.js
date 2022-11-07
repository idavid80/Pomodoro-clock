import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";

//Selector
const minutos = [
  {
    value: 1,
    label: "1'",
  },
  {
    value: 10,
    label: "10'",
  },
  {
    value: 20,
    label: "20'",
  },
  {
    value: 30,
    label: "30'",
  },
  {
    value: 40,
    label: "40'",
  },
  {
    value: 50,
    label: "50'",
  },
  {
    value: 60,
    label: "60'",
  }
];
const ciclos = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 10,
    label: "10",
  },
];

function valuetext(value) {
  return `${value}Min.`;
}

const Configuracion = (props) => {
  //POPUP
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //Propagación valores
  function obtenerTrabajo(e, value) {
    props.setTrabajo(value);
  }

  function obtenerDescanso(e, value) {
    props.setDescanso(value);
  }
  function obtenerCiclos(e, value) {
    props.setCiclos(value);
  }

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Configuración
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Paper sx={{ m: 1 }} elevation={4}>Tiempo de trabajo
          <Box sx={{ width: 500 }}>
            <AccessTimeIcon></AccessTimeIcon>
            <Slider
              name="Trabajo"
              aria-label="Custom marks"
              defaultValue={25}
              getAriaValueText={valuetext}
              step={1}
              valueLabelDisplay="auto"
              marks={minutos}
              max="60"
              value={props.trabajo}
              onChange={obtenerTrabajo}
            />
          </Box>
        </Paper>
        <Paper sx={{ m: 1 }} elevation={4}>Tiempo de descanso
          <Box sx={{ width: 500 }}>
            <AccessTimeFilledIcon></AccessTimeFilledIcon>
            <Slider
              name="Descanso"
              aria-label="Custom marks"
              defaultValue={10}
              getAriaValueText={valuetext}
              step={1}
              valueLabelDisplay="auto"
              marks={minutos}
              max="30"
              value={props.descanso}
              onChange={obtenerDescanso}
            />
          </Box>
        </Paper>
        <Paper sx={{ m: 1 }} elevation={4}>Número de ciclos
          <Box sx={{ width: 500 }}>
            <AlarmOnIcon></AlarmOnIcon>
            <Slider
              name="Ciclos"
              aria-label="Custom marks"
              defaultValue={4}
              getAriaValueText={valuetext}
              step={1}
              valueLabelDisplay="auto"
              marks={ciclos}
              max="10"
              value={props.ciclos}
              onChange={obtenerCiclos}
            />
          </Box>
        </Paper>
      </Popover>
    </div>
  );
};

export default Configuracion;