import React from "react";
import { Chip, Avatar, Stack, Typography } from "@mui/material";
import { Grid, TextField, InputAdornment } from "@material-ui/core";
import { Box, Button } from "@mui/material";
import ClassIcon from "@mui/icons-material/Class";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import TopicIcon from "@mui/icons-material/Topic";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import PreviewIcon from "@mui/icons-material/Preview";
export const GeneralData = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      name="formClass"
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <Box m={5}>
        <Typography variant="h6" gutterBottom>
          Carrera
        </Typography>
        <Grid container spacing={2} xs={12} component="main">
          <Grid item xs={8}>
            <TextField
              fullWidth
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
              name="degree"
              variant="outlined"
              label="Carrera"
              //value={values.subject}
              //onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>
          Período Académico
        </Typography>

        <Grid item xs={8}>
            <TextField
              fullWidth
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
              name="degree"
              variant="outlined"
              label="Nombre del Periodo Academico"
              //value={values.subject}
              //onChange={handleInputChange}
            />
          </Grid>

        <Grid container spacing={2} xs={12} component="main">
          <Grid item xs={6}>
            <TextField
              margin="normal"
              type="date"
              name="activities"
              variant="outlined"
              label="Fecha Inicio"
              //  value={values.activities}
              //  onChange={handleInputChange}
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

          <Grid item xs={6}>
            <TextField
              margin="normal"
              type="date"
              name="activities"
              variant="outlined"
              label="Fecha Fin"
              //  value={values.activities}
              //  onChange={handleInputChange}
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
        </Grid>

        <Typography variant="h6" gutterBottom>
          Director de la Carrera
        </Typography>

        <Grid container spacing={2} xs={12} component="main">
          <Grid item xs={6}>
            <TextField
              margin="normal"
              name="activities"
              variant="outlined"
              label="Nombre"
              //  value={values.activities}
              //  onChange={handleInputChange}
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

          <Grid item xs={6}>
            <TextField
              margin="normal"
              type="email"
              name="activities"
              variant="outlined"
              label="correo"
              //  value={values.activities}
              //  onChange={handleInputChange}
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
        </Grid>


        <Box pt={8} display="flex" justifyContent="center" alignItems="center">
          <Stack direction="row" spacing={2}>
            <Button
              color="primary"
              variant="contained"
              //    onClick={() => change(4)}
            >
              Siguiente
            </Button>
            <Button variant="contained" color="inherit">
              Resetear
            </Button>
          </Stack>
        </Box>
      </Box>
    </form>
  );
};
