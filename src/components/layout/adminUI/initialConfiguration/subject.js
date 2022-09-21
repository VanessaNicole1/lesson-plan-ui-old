import { Box,Button, Input } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DataGrid , GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton,} from "@mui/x-data-grid";

export const Subject = () => {
  const [subjects, setSubject] = useState([]);
  const requestOptions = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    method: 'GET',
    redirect: 'follow'
  };
  useEffect(() => {
  fetch("http://localhost:3000/subjects", requestOptions)
    .then((response) => response.json())
    .then((json) => setSubject(json));
  }, []);
  console.log("SUBBJECTS:",subjects)  

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Nombre", width: 400 },
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


  
  return (
    <>
    <div>
        <h1> Listado de Materias </h1>
        <p>Subir el listado de las materias en formato .csv de la siguiente manera: </p>
        <p> dato1, dato2, dato 3</p>
        <p>Ejemplo:</p>
        <p>dato1,dato2,dato3</p>
        <p>"dato1","dato2","dato"</p>
        <p>

        </p>
        <p> Archivo excel</p>
        
    </div>
    <div className='scheduleUploadFile'>
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
    </div>

    <div style={{ height: 600, width: "55%" }}>
        <h1>Contenido del archivo</h1>
        <DataGrid
          rows={subjects}
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
  )
}
