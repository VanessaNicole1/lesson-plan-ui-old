import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Avatar, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModalClassPlan } from "./modalClassPlan";
import { useState } from "react";

export const TableClassPlan = () => {
  const [lgShowPost, setLgShowPost] = useState(false);
  const [lgShowEdit, setLgShowEdit] = useState(false);
  
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
            <Avatar sx={{ m: 1, bgcolor: "info.main" }}>
              <AddIcon onClick={() => setLgShowPost(true)} />
            </Avatar>
          </Box>
        </Box>
      </GridToolbarContainer>
    );
  }

  const data = [
    {
      id: 1,
      subject: "Autonamatas",
      date: "16-06-2022",
      topic: "Lenguajess Formales en Automatats",
      course: "9 B",
    },
    {
      id: 2,
      subject: "Compiladores",
      date: "20-06-2022",
      topic: "Analisis Sintactico",
      course: "10 A",
    },
    {
      id: 3,
      subject: "Inteligencia Artificial",
      date: "10-07-2022",
      topic: "Redes Neuronales",
      course: "8 A",
    },
    {
      id: 4,
      subject: "Etica",
      date: "15-07-2022",
      topic: "Ciberdelincuentes",
      course: "5 A",
    },
    {
      id: 5,
      subject: "Ingenieria del Software I",
      date: "20-07-2022",
      topic: "Metodolodias Agiles vs Metodologias Tradicionales",
      course: "5 A",
    },
  ];
  //3 - Definimos las columns
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "subject",
      headerName: "Materia",
      width: 230,
    },
    {
      field: "date",
      headerName: "Fecha",
      width: 130,
    },
    {
      field: "topic",
      headerName: "Tema",
      width: 400,
    },
    {
      field: "course",
      headerName: "Curso",
      width: 130,
    },
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
              <EditIcon onClick={() => setLgShowEdit(true)}/>
            </Avatar>
            <Avatar sx={{ m: 1, bgcolor: "error.main" }}>
              <DeleteIcon />
            </Avatar>
          </>
        );
      },
    },
  ];

  const ModalContentPost =()=>{
    return(
      <Modal
        size="lg"
        show={lgShowPost}
        onHide={() => setLgShowPost(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Plan de Clases
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> <ModalClassPlan/> </Modal.Body>
      </Modal>
    );
  }

  const ModalContentEdit =()=>{
    return(
      <Modal
        size="lg"
        show={lgShowEdit}
        onHide={() => setLgShowEdit(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Plan de Clases
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> <ModalClassPlan/> </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <div style={{ height: 600, width: "55%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </div>
      {lgShowPost ?  <ModalContentPost/> : null}
      {lgShowEdit ?  <ModalContentEdit/> : null}
    </>
  );
};
