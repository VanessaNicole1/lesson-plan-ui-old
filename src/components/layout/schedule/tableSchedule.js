import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createDaysHours(name) {
  return { name};
}
const days=[
  createDaysHours('Lunes'),
  createDaysHours('Martes'),
  createDaysHours('Miercoles'),
  createDaysHours('Jueves'),
  createDaysHours('Viernes'),
]

const hours=[
  createDaysHours('7.30'),
  createDaysHours('8.30'),
  createDaysHours('9.30'),
  createDaysHours('10.30'),
  createDaysHours('11.30'),
  createDaysHours('12.30'),
  createDaysHours('13.30'),
]

export const TableSchedule = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {days.map((day) => (
              <StyledTableCell component="th" scope="row">
              {day.name}
            </StyledTableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
        {hours.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow>
              <StyledTableCell>
                HOla
              </StyledTableCell>
            </StyledTableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
};
