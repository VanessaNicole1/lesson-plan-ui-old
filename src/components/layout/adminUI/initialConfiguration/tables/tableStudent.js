import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { HeaderUNL } from "../../../../headers/headerUNL";
import { Grid } from "@mui/material";


export const TableStudent = () => {
//1 - configuramos Los hooks


//2 - fcion para mostrar los datos con axios


const data = [
    {address:"982991598",name:"Vanessa",lastName:"Iniguez",email:"vanessa.iniguez@unl.edu.ec" },
    {address:"982991598",name:"Alexis",lastName:"Canar",email:"alexis.canar@unl.edu.ec" },
   ];


//3 - Definimos las columns
const columns = [
    {
        name: "address",
        label: "Direccion"
    },
    {
        name: "name",
        label: "Nombre"
    },
    {
        name: "lastName",
        label: "Apellido"
    },
    {
        name: "email",
        label: "Correo"
    },
    
]
//4 - renderizamos la datatable
        return (
            <>
            <Grid container>
            <HeaderUNL></HeaderUNL> 
            </Grid>
            
            <MUIDataTable 
            title={"Tabla de Estudiantes"}
            data={data}
            columns={columns}
            />
            </>
            
        )

}