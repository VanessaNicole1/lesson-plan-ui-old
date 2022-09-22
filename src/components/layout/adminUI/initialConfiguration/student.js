import React, { useEffect, useState } from "react";
import { Box, Button, Input } from "@mui/material";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

export const Student = () => {
  const [selectFile, setSelectFile] = useState(null);
  const [students, setStudent] = useState([]);
  const URL = "http://localhost:3000/students";
  // let headers = new Headers();

  const uploadFile = (e) => {
    setSelectFile(e);
  };

  const insertFile = () => {
    const f = new FormData();
    for (let index = 0; index < selectFile.length; index++) {
      f.append("doc", selectFile[index]);
    }
    const requestOptions = {
      mode: "no-cors",
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
      body: f,
      redirect: "follow",
    };

    fetch("http://localhost:3000/students", requestOptions)
      .then((result) => console.log(result, "EXITTO AL SUBBIR"))
      .catch((error) => console.log("error", error));
  };

  const columns = [
    { field: "address", headerName: "Dirección", width: 225 },
    { field: "name", headerName: "Nombre", width: 150 },
    { field: "lastName", headerName: "Apellido", width: 150 },
    { field: "email", headerName: "Correo", width: 225 },
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
        </Box>
      </GridToolbarContainer>
    );
  }
  const requestOptionsGet = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch(URL, requestOptionsGet)
      .then((response) => response.json())
      .then((json) => setStudent(json));
  }, []);
  console.log("STUDENTS:", students);

  return (
    <>
      <center>
        <div>
          <h1> Listado Estudiantes </h1>
          <p>
            Subir el litado de los docentes en formato .xlsx de la siguiente
            manera:{" "}
          </p>
          <p> Dirección, Nombre, Apellido, Correo</p>
          <p>Ejemplo:</p>
          <p>Dirección, Nombre, Apellido, Correo</p>
          <p>"Av. Eugenio Espejo","Juan","Perez", "juanperez@unl.edu.ec"</p>
          <p></p>
          <p> Archivo excel CHD</p>
        </div>
        <div className="scheduleUploadFile">
          <Input
            id="contained-button-file"
            multiple
            type="file"
            onChange={(e) => uploadFile(e.target.files)}
          />
          <Button
            variant="contained"
            component="span"
            onClick={() => insertFile()}
          >
            Subir Archivo
          </Button>
        </div>

        <div style={{ paddingTop: "3%" }}></div>

        <div style={{ height: 600, width: "55%" }}>
          <h1>Contenido del archivo</h1>
          <DataGrid
            rows={students}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            components={{
              Toolbar: CustomToolbar,
            }}
          />
        </div>
      </center>
    </>
  );
};
