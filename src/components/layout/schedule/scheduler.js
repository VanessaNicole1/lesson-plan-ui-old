//import { Grid } from "@chakra-ui/react";

import React from "react";
import  ReactDOM  from "react-dom";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { HeaderUNL } from "../../headers/headerUNL";
import { TableSchedule } from "./tableSchedule";
import { Grid } from "@mui/material";
import initialData from "./initialData";


export const Scheduler = ({column, tasks}) => {
  

  return (
    <>
      return this.state.row
      <Grid container>
        <HeaderUNL/>
      </Grid>
      
      <Grid container alignContent="center">

      </Grid>
      
      <Grid container alignContent="center">
        <TableSchedule>
          
        </TableSchedule>
      </Grid>
    </>
  );
};
