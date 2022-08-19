import { AppBar, Box, Grid, Tab, Tabs, Toolbar } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { HeaderUNL } from "../../headers/headerUNL";
import TeacherNavTabs from "../menu/teacherNavTab";

export const TeacherMain = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <>
        <Grid>
          <HeaderUNL></HeaderUNL>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Box sx={{ minwidth: "100%", flexGrow: 1 }}>
              <AppBar position="sticky">
                <Toolbar>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                    orientation="vertical"
                    variant="scrollable"
                  >
                    <Tab as={Link} to="/classPlan" label="Plan de Clases" />
                    <Tab as={Link} to="/listStudents" label="Estudiantes" />
                    <Tab label="Mis Reportes" />
                    <Tab label="Horario" />
                    
                  </Tabs>
                </Toolbar>
              </AppBar>
            </Box>
            <Outlet />
          </Grid>
          <Grid item xs={10}></Grid>
        </Grid>
      </>
    </>
  );
};
