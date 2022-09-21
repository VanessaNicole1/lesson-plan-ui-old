import React, { useEffect, useState } from "react";
import { Box, Button, Input } from "@mui/material";
import { DataGrid , GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton,} from "@mui/x-data-grid";

export const Teacher = () => {
  const [selectFile, setSelectFile] = useState(null);
  const [getTeachers, setTeachers] = useState([]);
  const URL = "http://localhost:3000/teachers";

  const uploadFile = (e) => {
    setSelectFile(e);
  };

  const insertFile = () => {
    const f = new FormData();
    for (let index = 0; index < selectFile.length; index++) {
      f.append("doc", selectFile[index]);
    }

    const requestOptions = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
      body: f,
      redirect: "follow",
    };

    fetch(URL, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result, "TEACHERS CREADOS"))
      .catch((error) => console.log("error", error));
  };

  const requestOptionsGet = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    method: "GET",
    redirect: "follow",
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "identifier", headerName: "Identificador", width: 150 },
    { field: "name", headerName: "Nombre", width: 150 },
    { field: "lastName", headerName: "Apellido", width: 150 },
    { field: "email", headerName: "Correo", width: 300 },
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

  useEffect(() => {
    fetch(URL, requestOptionsGet)
      .then((response) => response.json())
      .then((json) => setTeachers(json));
  }, []);
  console.log("TEACHERS:",getTeachers)

  return (
    <>
      <div>
        <h1> Listado Docentes </h1>
        <p>
          Subir el listado de los docentes en formato .csv de la siguiente
          manera:{" "}
        </p>
        <p> cedula, nombre, apellido, correo</p>
        <p>Ejemplo:</p>
        <p>cedula, nombre, apellido, correo</p>
        <p>110596450,Edison,Coronel,edison.cor@unl.edu.ec</p>
        <p>110596451,Maria ,Ruilova,maria.rui@unl.edu.ec</p>
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

      <div style={{ height: 600, width: "55%" }}>
        <h1>Contenido del archivo</h1>
        <DataGrid
          rows={getTeachers}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          components={{
            Toolbar: CustomToolbar,
          }
          }
        />
      </div>
    </>
  );
};
