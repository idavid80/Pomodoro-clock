import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import "./Logo.css";

const color1 = red[500];
const color2 = green[500];

const Logo = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems="center"
      spacing={2}
      m={2}

    > 
      <Typography variant="h2" color={color1}>
        Pomodoro
      </Typography>
      <Typography variant="h2" color={color2}>
        Cl
        <img className="imagen" src="https://ouch-cdn2.icons8.com/Sa32M0icwH33dVuQ9cjQWl0euyf4nFAdrD2wdQLV_Kg/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTI3/L2U0MWZhNTRhLTcw/YzQtNGY1MC1hYTdi/LTM3MTc0NzY5M2Y0/Yy5zdmc.png"
          alt="despertador"
        ></img>ck
      </Typography> 
    </Stack>
  );
};
export default Logo;
