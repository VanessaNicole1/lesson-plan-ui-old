import React from "react";
import logoUNL from "../../public/img/logoUNL.png";
import logoCIS from "../../public/img/logoCIS.png";
//import "./headerUNL.css";
import { Box, Grid } from "@mui/material";

export const HeaderUNL = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        spacing={4}
        sx={{
          minWidth: "100vh",
          marginX: "40vh",
          marginY: "2vh",
          backgroundColor: "white",
        }}
      >
        <Grid item justifyContent="center">
        <Box
          component="img"
          sx={{
            height: 120
          }}
          alt="Universidad Nacional de Loja"
          src={logoUNL}
        />
        </Grid>

        <Grid item justifyContent="center">
          <h1>PLAN DE CLASES</h1>
        </Grid>

        <Grid item justifyContent="center">
        <Box
          component="img"
          sx={{
            height: 120
          }}
          alt="Carrera CIS/Computación"
          src={logoCIS}
        />
        </Grid>
      </Grid>
    </>
  );
};
