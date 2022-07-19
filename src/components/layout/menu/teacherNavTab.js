import * as React from "react";
import Box from "@mui/material/Box";
import { AppBar,  Tab, Tabs, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function TeacherNavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ minwidth: "100%", flexGrow: 1 }}>
      <AppBar position="sticky" >
        <Toolbar>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
            orientation="vertical"
            variant="scrollable"
          >
              <Tab as={Link} to="/classPlan" label="Plan de Clases" />
              <Tab as={Link} to="/classPlan" label="Estudiantes"  />
              <Tab label="Mis Reportes" />
              <Tab label="Horario"  />
            
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
