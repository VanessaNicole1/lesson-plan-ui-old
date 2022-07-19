import React, { useState } from "react";
import { Grid, TextField, InputAdornment } from "@material-ui/core";

import {
  Chip,
  Divider,
  Paper,
  Avatar,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
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

const date = new Date();
const futureDate = date.getDate();
date.setDate(futureDate);
const defaultValue = date.toLocaleDateString("en-CA");

const initialFieldValues = {
  theme: "Presentación y Encuadre de la Materia",
  subject: "Titulación",
  date: "",
  course: "10mo B",
  teacher: "Ing. Valeria Herrera",
  activities:
    "Presentación de los estudiantes" +
    "\nOrientación por parte del docente sobre las tareas a realizar a lo largo de la asignatura" +
    "\nRevisión de Sílabo" +
    "\nSocialización de acreditables y criterios a evaluar",
  observation:
    "Presentación y Encuadre de la Materia" +
    "\nAnálisis del aporte de la asignatura en nuestra sociedad",
};

export const ValidateClassPlan = ({ change }) => {
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
      sm={9}
      md={6}
      component={Paper}
      elevation={6}
      sx={{
        minheight: "80vh",
        marginX: "40vh",
        marginY: "5vh",
        backgroundColor: "white",
      }}
    >
      <form
        name="formClass"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Divider
          sx={{
            marginTop: "2vh",
          }}
        >
          <Chip color="primary" label="DATOS INFORMATIVOS" />
        </Divider>
        <Box m={5} >
          <Grid container spacing={2} component="main" sx={{}}>
            <Grid item xs={6}>
              <TextField
                disabled
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
                disabled
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
                onChange={handleInputChange}
                value={defaultValue}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                disabled
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
            <Grid item>
              <TextField
                disabled
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

            <Grid item xs={12}>
              <TextField
                disabled
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

          <Divider>
            <Chip color="primary" label="CONTENIDO" />
          </Divider>

          <Grid item xs={12}>
            <TextField
              disabled
              fullWidth
              multiline
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

          <Grid item xs={12}>
            <Divider>
              {" "}
              <Chip color="primary" label="Recurso" />
            </Divider>
            <TextField
              disabled
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

          <Divider>
            <Chip color="primary" label="OBSERVACIONES" />
          </Divider>

          <Grid container item xs={12}>
            <TextField
              disabled
              fullWidth
              multiline
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
            <Stack direction="row" spacing={2} justifyContent="center">
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  ¿El plan de clases expuesto fue cumplido a cabalidad por el
                  docente?
                </FormLabel>
                <Grid container justifyContent="center">
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="ok"
                      control={<Radio color="success" />}
                      label="Cumplio"
                    />
                    <FormControlLabel
                      value="notOk"
                      control={<Radio color="error" />}
                      label="No Cumplio"
                    />
                  </RadioGroup>
                </Grid>

                <Grid container justifyContent="center">

                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => change(4)}
                >
                  Guardar
                </Button>
                </Grid>

              </FormControl>
            </Stack>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
