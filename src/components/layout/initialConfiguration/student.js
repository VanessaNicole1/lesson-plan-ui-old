import { Button, Input, Stack } from "@mui/material";
import React from "react";
import { TableIC } from "./tableIC";

export const Student = ({change}) => {
  return (
    <>
      <div>
        <h1>Listado Estudiantes</h1>
        <p>
          Subir el listado de los estudiantes en formato .xlsx de la siguiente
          manera:{" "}
        </p>
        <p> dato1, dato2, dato 3</p>
        <p>Ejemplo:</p>
        <p>dato1,dato2,dato3</p>
        <p>"dato1","dato2","dato"</p>
        <p></p>
        <p> Archivo excel CHD</p>
      </div>
      <div className="scheduleUploadFile">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </div>

      <div className="tableSchedule">
        <h1>Contenido del archivo</h1>
        <TableIC></TableIC>
      </div>

      <div className="buttomTab">
        <Button variant="contained" color="success" onClick={()=> change(2)}> Aceptar </Button> 
      </div>
    </>
  );
};
