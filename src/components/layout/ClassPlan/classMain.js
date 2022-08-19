import { Grid } from "@mui/material";
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

      <Grid container rowSpacing={2} justifyContent="center" sx={{marginY:"2%"}}>
        <TableClassPlan></TableClassPlan>
      </Grid>
      
    </>
  );
};
