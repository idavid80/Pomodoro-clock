import "./App.css";
import Logo from "./Pomodoro-Clock/Logo";
import Reloj from "./Pomodoro-Clock/Reloj";
import Clock from "./Pomodoro-Clock/Clock";
import Pomodoro from "./Pomodoro-Clock/Pomodoro";
import Stack from "@mui/material/Stack";

function App(props) {
  return (
    <Stack>
      <Logo />
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
        m={2}
      >
        <Reloj tiempo={props.tiempo} />
        <Clock />
      </Stack>
      <Pomodoro />
    </Stack>
  );
}

export default App;
