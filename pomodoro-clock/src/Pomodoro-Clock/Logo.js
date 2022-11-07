import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { green } from "@mui/material/colors";

const color1 = red[500];
const color2 = green[500];

const Logo = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems="center"
      spacing={2}
      mb={2}
    >
        <Typography variant="h2" color={color1}>
          Pomodoro
        </Typography>
        <Typography variant="h2" color={color2}>
          Clock
        </Typography>
      </Stack>

  );
};
export default Logo;
