import { Grid } from '@mui/material'
import React from 'react'
import { HeaderUNL } from '../../headers/headerUNL'
import { TableStudent } from './tableStudent'

export const StudentReport = () => {
  return (
    <>
    <Grid container>
      <HeaderUNL></HeaderUNL>
    </Grid>
    <Grid container justifyContent="center">
      <TableStudent></TableStudent>
    </Grid>
    </>
  )
}
