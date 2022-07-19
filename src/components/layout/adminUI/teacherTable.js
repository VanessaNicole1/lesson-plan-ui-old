import * as React from "react";
import MUIDataTable from "mui-datatables";
import { HeaderUNL } from "../../headers/headerUNL";
import { Grid, IconButton } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export const TeacherTable = () => {
  //1 - configuramos Los hooks

  //2 - fcion para mostrar los datos con axios

  const data = [
    {
      id: 1,
      address: "Av. 8 de Diciembre",
      name: "Edison",
      lastName: "Coronel",
      email: "edisoncor@unl.edu.ec",
      action: (
        <IconButton aria-label="hola">
          <ModeEditIcon color="primary" />
        </IconButton>
      ),
    },
    {
      id: 2,
      address: "Av. Eugenio Espejo",
      name: "Valeria",
      lastName: " Herrera Salazar",
      email: "correo@unl.edu.ec",
      action: (
        <IconButton aria-label="hola">
          <ModeEditIcon color="primary" />
        </IconButton>
      ),
    },
    {
      id: 3,
      address: "Av. UNiversitaria",
      name: "Genoveva",
      lastName: "Suing Alvito",
      email: "correo2@unl.edu.ec",
      action: (
        <IconButton aria-label="hola">
          <ModeEditIcon color="primary" />
        </IconButton>
      ),
    },
  ];

  //3 - Definimos las columns
  const columns = [
    {
      name: "id",
      label: "Nro",
    },
    {
      name: "address",
      label: "Direccion",
    },
    {
      name: "name",
      label: "Nombre",
    },
    {
      name: "lastName",
      label: "Apellido",
    },
    {
      name: "email",
      Label: "Correo",
    },
    {
      name: "action",
      Label: "Acción",
    },
  ];
  //4 - renderizamos la datatable
  return (
    <>
      <Grid container>
        <HeaderUNL></HeaderUNL>
      </Grid>

      <Grid container justifyContent="center">
        <MUIDataTable
          title={"Tabla de Docentes"}
          data={data}
          columns={columns}
        />
      </Grid>
    </>
  );
};
