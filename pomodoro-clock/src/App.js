import "./App.css";
import Logo from "./Pomodoro-Clock/Logo";
import Reloj from "./Pomodoro-Clock/Reloj";
import Clock from "./Pomodoro-Clock/Clock";
import Pomodoro from "./Pomodoro-Clock/Pomodoro";

function App(props) {
  return (
    <div className="App">
      <Logo />

      <div className="tiempos">
        <Reloj tiempo={props.tiempo} />
        <Clock />
      </div>
      <Pomodoro />
    </div>
  );
}

export default App;
