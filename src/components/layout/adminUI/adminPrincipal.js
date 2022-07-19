import { Grid } from '@mui/material'
import React from 'react'
import { HeaderUNL } from '../../headers/headerUNL'
import ResponsiveDrawer from './menu'
//import BasicMenu from './menu'

export const AdminPrincipal = () => {
  return (
    <>
      <Grid container>  
        <HeaderUNL></HeaderUNL> 
      </Grid>

      <Grid>
        <ResponsiveDrawer></ResponsiveDrawer>
      </Grid>

    </>
  )
}
