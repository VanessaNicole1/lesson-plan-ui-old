import React, { useState } from "react";
import { Grid, TextField, InputAdornment } from "@material-ui/core";

import { Chip, Avatar, Stack, Typography } from "@mui/material";
//import { useToasts } from "react-toast-notifications";
//import { makeStyles } from "@mui/styles";
import { Box, Button } from "@mui/material";
import ClassIcon from "@mui/icons-material/Class";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import TopicIcon from "@mui/icons-material/Topic";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import PreviewIcon from "@mui/icons-material/Preview";
//import { blue, green } from "@mui/material/colors";

const date = new Date();
const futureDate = date.getDate();
date.setDate(futureDate);
const defaultValue = date.toLocaleDateString("en-CA");

const initialFieldValues = {
  theme: "",
  subject: "Titulación",
  date: "",
  course: "10mo B",
  teacher: "Ing. Valeria Herrera",
  activities: "",
  observation: "",
};

export const ClasSPlan = ({ change }) => {
  const [values, setValues] = useState(initialFieldValues);
  //const [errors, setErrors] = useState();
  //const classes = useStyles();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
    >
      <form
        name="formClass"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        
        
        <Box m={5}>
        <Typography variant="h6" gutterBottom>Datos Informativos</Typography>
          <Grid container spacing={2} xs={12} component="main" >
          
            <Grid item xs={6}>
              <TextField
                sx={{
                  backgroundColor: "text.secondary",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Avatar variant="rounded">
                        <ClassIcon />
                      </Avatar>
                    </InputAdornment>
                  ),
                }}
                margin="normal"
                name="subject"
                variant="outlined"
                label="Materia"
                value={values.subject}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Avatar variant="rounded">
                        <CalendarMonthIcon />
                      </Avatar>
                    </InputAdornment>
                  ),
                }}
                margin="normal"
                name="date"
                type="date"
                variant="outlined"
                label="Fecha"
                //value={values.date}
                onChange={handleInputChange}
                value={defaultValue}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                margin="normal"
                name="course"
                variant="outlined"
                label="Curso"
                value={values.course}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Avatar variant="rounded">
                        <SchoolIcon />
                      </Avatar>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                name="teacher"
                variant="outlined"
                label="Docente"
                value={values.teacher}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Avatar variant="rounded">
                        <PersonIcon />
                      </Avatar>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            
            <Grid item xs={10}>
            
              <TextField
                margin="normal"
                fullWidth
                name="theme"
                variant="outlined"
                label="Ingrese la Tematica a tratar"
                value={values.theme}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Avatar variant="rounded">
                        <TopicIcon />
                      </Avatar>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            

            
          </Grid>

          <Typography variant="h6" gutterBottom>Contenido</Typography>
           
          
          
          <Grid item xs={10}>
            <TextField
              fullWidth
              multiline
              rows={5}
              margin="normal"
              name="activities"
              variant="outlined"
              label="Actividades a tratar"
              value={values.activities}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Avatar variant="rounded">
                      <FactCheckIcon />
                    </Avatar>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={10}>
              <Chip color="primary" label="Recurso" />
            <TextField
              fullWidth
              margin="normal"
              type="file"
              name="resources"
              label="Seleccione el recurso"
              placeholder="Recursos"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Avatar variant="rounded">
                      <AttachFileIcon />
                    </Avatar>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Typography variant="h6" gutterBottom>Observaciones</Typography>

          <Grid container item xs={10}>
            <TextField
              fullWidth
              multiline
              rows={5}
              margin="normal"
              name="observation"
              variant="outlined"
              label="Observaciones"
              value={values.observation}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Avatar variant="rounded">
                      <PreviewIcon />
                    </Avatar>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        
          
          
          

          <Box
            pt={8}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack direction="row" spacing={2}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => change(4)}
              >
                Guardar
              </Button>
              <Button variant="contained" color="inherit">
                Resetear
              </Button>
            </Stack>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
