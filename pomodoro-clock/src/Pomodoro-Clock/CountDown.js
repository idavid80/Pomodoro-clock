import React, { useState, useEffect } from "react";

const CuentaAtras = ({contador}) => {
  for(let i=4;i=0;i--){
  const [tiempo, setTiempo] = useState([contador]);

    if(i%2===0){
      contador=contador+5
    }

    useEffect(() => {
      while(tiempo!==0){
        const transcisionTiempo = setInterval(() => setTiempo(tiempo-1), 1000);
        return () => clearInterval(transcisionTiempo);}
    });
}
    
    return (
        <div>
            <p>{tiempo}</p> 
        </div>
    );
}

export default CuentaAtras;

