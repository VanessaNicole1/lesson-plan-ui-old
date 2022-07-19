import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import { PictureAsPdf } from "@mui/icons-material";

function createData(name, course, subject, state) {
  return { name, course, subject, state };
}

const rows = [
  createData("Juan Perez", "6to A", "Sw 2", "Validado"),
  createData("Vanesa Iñiguez", "10mo B", "Tesis", "Validado"),
  createData("Alexis Cañar", "10mo B", "Compiladore", "No Validado"),
];

export const tableR = ({ change }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="center">Curso</TableCell>
            <TableCell align="center">Materia</TableCell>
            <TableCell align="center">Estado</TableCell>
            <TableCell align="center">Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.course}</TableCell>
              <TableCell align="center">{row.subject}</TableCell>
              <TableCell align="center">{row.state}</TableCell>
              <TableCell align="center">
                {" "}
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <PictureAsPdf />
                </Avatar>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
