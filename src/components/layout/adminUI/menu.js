import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let navigate = useNavigate();
  const itemsList = [
    {
      text: "Reportes",
      icon: <SummarizeIcon />,
      onClick: () => navigate("/home"),
    },
    {
      text: "Docentes",
      icon: <PersonIcon />,
      onClick: () => navigate("/about"),
    },
    {
      text: "Asignaturas",
      icon: <SummarizeIcon />,
      onClick: () => navigate("/contact"),
    },
    {
      text: "Estudiantes",
      icon: <PersonIcon />,
      onClick: () => navigate("/contact"),
    },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        
        {["Reportes", "Docentes", "Asignaturas", "Estudiantes"].map(
          (text, index) => (
            <ListItem button key={text} onClick={() => navigate('/admin/teachers')} disablePadding >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <SummarizeIcon /> : <PersonIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Configuración Inicial", "Acerca de"].map((text, index) => (
          <ListItem button onClick={() => navigate('/admin/confInit')} key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <SettingsIcon /> : <InfoIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Director: Ing. Pablo Ordoñez
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>
          <h1> Resolución para cumplimiento de Actividades de AD2</h1>
        </Typography>
        <Typography paragraph>
          La Universidad Nacional de Loja a través de la expedición de la
          Resolución Nro. 080 INSTRUCTIVO PARA LA DISTRIBUCIÓN DE ACTIVIDADES DE
          DOCENCIA, INVESTIGACIÓN Y GESTIÓN DEL PERSONAL ACADÉMICO DE LA
          UNIVERSIDAD NACIONAL DE LOJA en marzo de 2021 norma la política
          institucional para la asignación de las actividades de docencia de
          acuerdo a cada tipo de docente. Artículo 5. Directrices Generales,
          apartado 5.1 PARA LA ASIGNACIÓN DE CARGA HORARIA PARA LAS ACTIVIDADES
          DE DOCENCIA, específicamente en 5.1.2. Para la asignación de carga
          horaria para actividades de docencia complementarias obligatorias
          indica en el primer punto que: “Para la preparación y actualización de
          clases, seminarios, talleres, entre otras, que se codificará como AD2,
          se asignará la carga horaria de acuerdo a lo establecido en las tablas
          del anexo 2. Las evidencias del cumplimiento de esta actividad podrán
          ser: las técnicas planificadas para el desarrollo del proceso
          enseñanza-aprendizaje, las presentaciones, videos, guías para el
          desarrollo de las actividades de aprendizaje, reportes del EVA u otros
          recursos metodológicos que prepare el docente para el desarrollo de la
          asignatura”.
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
