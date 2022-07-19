
import { Button } from "@material-ui/core";
import { Box } from "@mui/material";
import "./initialConfiguration.css";
import { TabIC } from "./tabIC";

export const InitialConfiguration = ({change}) => {
 
  return (
    <>
      <div className="divTabIC">
        <TabIC></TabIC>
      </div>
      <div  >
          <Button variant="contained"  color="success" onClick={()=> change(3)}> Aceptar </Button>   
      </div>
    </>
  );
};
