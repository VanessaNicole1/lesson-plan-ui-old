import { Button, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderUNL } from "../../headers/headerUNL";
import { TableClassPlan } from "./tableClassPlan";

export const ClassMain = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid container>
        <HeaderUNL></HeaderUNL>
      </Grid>

      <Grid container justifyContent="center" sx={{
        marginY:"3vh"
      }}>
        <Button variant="contained"
        onClick={() => navigate('/teacher/classPlan')}
        >Nuevo Plan</Button>
      </Grid>

      <Grid container rowSpacing={2} justifyContent="center">
        <TableClassPlan></TableClassPlan>
      </Grid>
      
    </>
  );
};
