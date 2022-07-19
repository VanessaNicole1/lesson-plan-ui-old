import React, { useState } from "react";
import { Grid, TextField, InputAdornment } from "@material-ui/core";

import { Chip, Divider, Paper, InputLabel, Avatar, Stack } from "@mui/material";
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
import { blue, green } from "@mui/material/colors";

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
        <Box m={5}>
          <Grid container spacing={2} xs={12} component="main" sx={{}}>
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
            <Grid item>
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

            
            <Grid item xs={8}>
            <center>
              <TextField
                margin="normal"
                fullWidth
                name="theme"
                variant="outlined"
                label="Ingrese lfoa Tematica a tratar"
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
              </center>
            </Grid>
            

            
          </Grid>

          <Divider>
            <Chip color="primary" label="CONTENIDO" />
          </Divider>
          <center>
          <Grid item xs={8}>
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

          <Grid item xs={8}>
            <Divider>
              {" "}
              <Chip color="primary" label="Recurso" />
            </Divider>
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

          <Divider>
            <Chip color="primary" label="OBSERVACIONES" />
          </Divider>

          <Grid container item xs={8}>
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
          </center>
          
          
          

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
