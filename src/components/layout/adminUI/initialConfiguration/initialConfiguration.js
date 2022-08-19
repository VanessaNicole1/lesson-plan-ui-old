
import { Button } from "@material-ui/core";
import { Box, Grid } from "@mui/material";
import { HeaderUNL } from "../../../headers/headerUNL";
import "./initialConfiguration.css";
import { TabIC } from "./tabIC";

export const InitialConfiguration = ({change}) => {
 
  return (
    <>
    <Grid container>
      <HeaderUNL></HeaderUNL>
    </Grid>
      <div className="divTabIC">
        <TabIC></TabIC>
      </div>
      <div  >
          <Button variant="contained"  color="success" onClick={()=> change(3)}> Aceptar </Button>   
      </div>
    </>
  );
};
