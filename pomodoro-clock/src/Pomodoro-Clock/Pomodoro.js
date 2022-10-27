import React, { useState, useEffect } from "react";

const Pomodoro = ({ MinSeg }) => {
  const { minutos = 0, segundos = 0 } = MinSeg;
  const [[mins, segs], setTime] = useState([minutos, segundos]);

  const tiempoHexagesimal = () => {
    if (mins === 0 && segs === 0) reset(MinSeg);
    else if (segs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, segs - 1]);
    }
  };

  const reset = () => {
    setTime([parseInt(minutos), parseInt(segundos + 5)]);
  };

  useEffect(() => {
    const tiempo = setInterval(() => tiempoHexagesimal(), 1000);
    return () => clearInterval(tiempo);
  });

  return (
    <div>
      <p>{`${mins.toString().padStart(2, "0")}:${segs
        .toString()
        .padStart(2, "0")}`}</p>
    </div>
  );
};

export default Pomodoro;
