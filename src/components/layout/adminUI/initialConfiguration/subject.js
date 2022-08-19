import { Button, Input } from '@mui/material'
import React from 'react'
import { TableIC } from './tableIC'

export const Subject = () => {
  return (
    <>
    <div>
        <h1> Listado de Materias </h1>
        <p>Subir el litado de las materias en formato .csv de la siguiente manera: </p>
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

    <div className='tableSchedule'>
      <h1>Contenido del archivo</h1>
      <TableIC></TableIC>
    </div>
    </>
  )
}
