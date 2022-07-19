import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
//import { createTheme, ThemeProvider } from "@mui/material/styles";
import { roundTextFieldStylesHook } from "@mui-treasury/styles/textField/round";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { orange, purple } from "@material-ui/core/colors";
import { useTwitterBtnStyles } from "@mui-treasury/styles/button/twitter";
import Image from "../../../public/img/fondoLogin.jpg";
import { useNavigate } from 'react-router-dom';


function Copyright(props) {
  
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Universidad Nacional de Loja "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: orange[700],
    },
    secondary: {
      main: purple[700],
    },
  },
});

const styles = {
  backgroundGrid: {
    backgroundImage: `url(${Image})`,
  },
};

export const SignInSide = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const inputBaseStyles = roundTextFieldStylesHook.useInputBase();
  const inputLabelStyles = roundTextFieldStylesHook.useInputLabel();
  const stylesButton = useTwitterBtnStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <Grid
          container
          component="main"
          sx={{
            height: "50vh",
            marginX: "30vh",
            marginY: "15vh",
          }}
        >
          <CssBaseline />

          <Grid
            item
            xs={12}
            sm={9}
            md={6}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "blue" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Iniciar Sesión
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <div>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Correo electronico"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    InputLabelProps={{
                      shrink: true,
                      classes: inputLabelStyles,
                    }}
                    InputProps={{
                      classes: {
                        ...inputBaseStyles,
                        adornedEnd: null,
                        adornedStart: null,
                      },
                      disableUnderline: true,
                    }}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Constraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    InputLabelProps={{
                      shrink: true,
                      classes: inputLabelStyles,
                    }}
                    InputProps={{
                      classes: {
                        ...inputBaseStyles,
                        adornedEnd: null,
                        adornedStart: null,
                      },
                      disableUnderline: true,
                    }}
                  />
                </div>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Recuerdame"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  classes={stylesButton}
                  sx={{ mt: 3, mb: 2 }}
                  color="primary"
                  onClick={() => navigate('/teacherI')}
                >
                  Iniciar Sesión
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      ¿Olvide mi contraseña?
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={false}
            sm={2}
            md={5}
            style={styles.backgroundGrid}
            sx={{
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
