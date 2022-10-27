import React, { useState, useEffect } from "react";

 const Clock = ({HorMinSeg}) => {
	   
  var fechaHora = new Date();
  const {hor=fechaHora.getHours(), min = fechaHora.getMinutes(), seg = fechaHora.getSeconds()} = HorMinSeg
/*   const [horas, setHoras] = useState(hor);
  const [minutos, setMinutos] = useState(min); */
  const [segundos, setSegundos] = useState(seg);

/* console.log(minutos,setMinutos,) */
  
    useEffect(() => {
      
      const tiempo = setInterval(() => setSegundos(segundos-1), 1000);
      return () => clearInterval(tiempo);
    });

  
  return (
      <div>
          <p>{`${hor
          .toString()
          .padStart(2, '0')}:${min
          .toString()
          .padStart(2, '0')}:${seg.toString().padStart(2, '0')}`}</p> 
      </div>
  );
}

export default Clock; 
