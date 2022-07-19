import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

export const TableClassPlan = () => {
//1 - configuramos Los hooks
const [products, setProducts] = useState( [] )

//2 - fcion para mostrar los datos con axios
const endpoint = 'https://fakestoreapi.com/products'

const getData = async () => {
    await axios.get(endpoint).then((response) => {
        const data = response.data
        console.log(data)
        setProducts(data)
    })
}

useEffect( ()=>{
    getData()
}, [])

//3 - Definimos las columns
const columns = [
    {
        name: "subject",
        label: "Materia"
    },
    {
        name: "date",
        label: "Fecha"
    },
    {
        name: "topic",
        label: "Tema"
    },
    {
        name: "course",
        label: "Curso"
    },
    
]
//4 - renderizamos la datatable
        return (
            <MUIDataTable 
            title={"Tabla de Plan de Clases"}
            data={products}
            columns={columns}
            />
        )

}