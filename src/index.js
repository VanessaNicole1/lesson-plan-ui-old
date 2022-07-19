import { Grid } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { HeaderUNL } from './components/headers/headerUNL';

import { ClasSPlan } from './components/layout/ClassPlan/clasSPlan';
import { SignInSide } from './components/layout/login/login';
import { StudentReport } from './components/layout/report/studentReport';
import { RoutesUI } from './components/layout/route/route';
import {Validation} from './components/layout/validation/validation';
import './index.css';
import { Plan } from './plan';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<Plan></Plan>
  
  //<Dashboard></Dashboard>  
 <>
 

 
 
 <Grid sx={{
  marginY : "5vh"
 }}>

 </Grid>
 <RoutesUI></RoutesUI>
 
 
  
  </>
  
);

