import React from "react";
import { HeaderUNL } from "../../headers/headerUNL";
import { Grid } from "@mui/material";
import { TableScheduler } from "./tableScheduler";

export const Scheduler = ({column, tasks}) => {
  

  return (
    <>
      <Grid container>
        <HeaderUNL/>
      </Grid>
      
      <Grid container >
        <TableScheduler/>
      </Grid>
    </>
  );
};
