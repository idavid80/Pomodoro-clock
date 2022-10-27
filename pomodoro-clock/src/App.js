import CuentaAtras from "./Pomodoro-Clock/CountDown";
import "./App.css";
import Pomodoro from './Pomodoro-Clock/Pomodoro'
import Reloj from './Pomodoro-Clock/Reloj'
import Clock from './Pomodoro-Clock/Clock'

let tiempoTrabajo = 25;
let tiempoDescanso = 5;

//const trabajo = { minutos: 0, segundos:tiempoTrabajo }
//const descanso = { minutos: 0, segundos:tiempoDescanso }
var fechaHora = new Date();
var horas = fechaHora.getHours();
var minutos = fechaHora.getMinutes()
var segundos = fechaHora.getSeconds();
let clock = horas+":"+minutos+":"+segundos

function descansar(){
if(tiempoTrabajo<0){
  tiempoTrabajo=tiempoDescanso
}
}descansar()

function App(props) {
  return (
    <div className="App">
{/*       <h2>Tiempo </h2>
      <h3>{horas}:{minutos}:{segundos}</h3>*/}
      <h3>CountDownTimer</h3> 
      <CuentaAtras contador = {tiempoTrabajo}/>
      <h3>Pomodoro</h3>
      <Pomodoro MinSeg={tiempoTrabajo}/>
      <Pomodoro MinSeg={tiempoDescanso}/>
      <h3>Reloj</h3>
      <Reloj tiempo = {props.tiempo}/>
      <h3>Clock</h3>
      <Clock HorMinSeg = {clock}/>
{/*       <h3>Teimpo pomodoro</h3>
      <h3>{tiempoPomodoro} descando:{tiempoDescanso} trabajo:{tiempoTrabajo}</h3> */}
    </div>
  );
}

export default App;

/* 
var fechaHora = new Date();
var horas = fechaHora.getHours();
var minutos = fechaHora.getMinutes()
var segundos = fechaHora.getSeconds();
//let tiempoTrabajo = minutos+25;
//let tiempoDescanso = 5;
let tiempoPomodoro = tiempoTrabajo+tiempoDescanso;


  if(tiempoTrabajo>60){

  tiempoTrabajo = (horas + 1)+":"+(tiempoTrabajo-60)

}
else{
  tiempoTrabajo = (horas)+":"+(tiempoTrabajo)
}
  */