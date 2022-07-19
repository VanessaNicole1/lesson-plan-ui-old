import React, { useState } from "react";
import { Button, Input } from "@mui/material";
import { TableStudent } from "./tables/tableStudent";

export const Student = () => {

  const [selectFile, setSelectFile]=useState(null);
 // let headers = new Headers();

  const uploadFile=(e)=>{
    setSelectFile(e);
  }


  const insertFile=()=>{
    const f= new FormData();
    for (let index = 0; index < selectFile.length; index++) {
      f.append("doc", selectFile[index]);  
    }
    const requestOptions = {
      mode: 'no-cors',
      credentials: 'include',
      headers:  {
        'Access-Control-Allow-Origin': '*',
      },
      method: "POST",
      body: f,
      redirect: "follow",
    };
  
    fetch("http://localhost:3000/students", requestOptions )
      .then((result) => console.log(result, "EXITTO AL SUBBIR"))
      .catch((error) => console.log("error", error));

  }


  return (
    <>
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
          onChange={(e)=>uploadFile(e.target.files)}
        />
        <Button variant="contained" component="span"
        onClick={()=>insertFile()}>
          Subir Archivo
        </Button>
      </div>

      <div className="tableSchedule">
        <h1>Contenido del archivo</h1>
          <TableStudent></TableStudent>
      </div>
    </>
  );
};
