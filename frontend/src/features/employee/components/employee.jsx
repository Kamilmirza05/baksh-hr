import React from 'react'
import Header from '../../../components/header/header'
import Sidebar from '../../../components/sidebar/sidebar'
import { makeStyles } from '@material-ui/core';
import { Box } from '@mui/system';
import EmployeForm from './employeForm';

const useStyles=makeStyles({
  mainContainer:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
  },
  sidebar:{
    width:'25%'
  }
})

const Employee = () => {
  const classes=useStyles();

  return (
    <Box component='div' className={classes.mainContainer}>
        <Box component='div' className={classes.sidebar}>
            <Sidebar/>
        </Box>
        <Box component='div'>
            <Header/>
            <EmployeForm/>
        </Box>
    </Box>
  )
}

export default Employee