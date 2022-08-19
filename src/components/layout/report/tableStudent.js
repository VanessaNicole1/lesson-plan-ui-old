
import * as React from "react";
import {
  DataGrid,
  GridToolbar
} from "@mui/x-data-grid";


export const TableStudent = () => {
  

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 230,
    },
    {
      field: "course",
      headerName: "Curso",
      width: 130,
    },
    {
      field: "subject",
      headerName: "Materia",
      width: 230,
    },
    {
      field: "state",
      headerName: "Estado",
      width: 130,
    }
  ];

  const data = [
    {
      id: 1,
      name: "Juan Perez",
      state: "Validado",
      subject: "Automatas",
      course: "9 B",
    },
    {
      id: 2,
      name: "Vanesa Iñiguez ",
      state: "Validado",
      subject: "Trabajo de Titulación",
      course: "10 B",
    },
    {
      id: 3,
      name: "Alexis Cañar",
      state: "No Validado",
      subject: "Compiladores",
      course: "10 B",
    },
    
  ];
 
  

  return (
    <div style={{ height: 400, width: "50%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
};
