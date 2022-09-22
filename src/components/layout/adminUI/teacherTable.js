import * as React from "react";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { HeaderUNL } from "../../headers/headerUNL";
import { Avatar, Box, Grid } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const TeacherTable = () => {
  const [getTeachers, setTeachers] = useState([]);
  const URL = "http://localhost:3000/teachers";

  const requestOptionsGet = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    method: "GET",
    redirect: "follow",
  };

  const columns = [
    { field: "identifier", headerName: "Identificador", width: 150 },
    { field: "name", headerName: "Nombre", width: 150 },
    { field: "lastName", headerName: "Apellido", width: 150 },
    { field: "email", headerName: "Correo", width: 300 },
    {
      field: "action",
      headerName: "Acciones",
      width: 130,
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: () => {
        return (
          <>
            <Avatar sx={{ m: 1, bgcolor: "info.main" }}>
              <EditIcon />
            </Avatar>
            <Avatar sx={{ m: 1, bgcolor: "error.main" }}>
              <DeleteIcon />
            </Avatar>
          </>
        );
      },
    },
  ];

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <Box
          //height="65px"
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="left"
        >
          <Box
            width="70%"
            display="flex"
            justifyContent="flex-start"
            //alignItems="center"
          >
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
            <GridToolbarDensitySelector />
            <GridToolbarExport />
          </Box>

          <Box
            width="30%"
            display="flex"
            justifyContent="flex-end"
            //alignItems="center"
          >
            
          </Box>
        </Box>
      </GridToolbarContainer>
    );
  }

  const data = [{
    id: 1,
    address: "Av. 8 de Diciembre",
    name: "Edison",
    lastName: "Coronel",
    email: "edisoncor@unl.edu.ec",
  }]

  useEffect(() => {
    fetch(URL, requestOptionsGet)
      .then((response) => response.json())
      .then((json) => setTeachers(json));
  }, []);
  console.log("TEACHERS:", getTeachers);
  
  return (
    <>
      <Grid container>
        <HeaderUNL></HeaderUNL>
      </Grid>

      <Grid container justifyContent="center">
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </Grid>
    </>
  );
};
