import React, { useEffect } from 'react'
import Header from '../../../components/header/header'
import Sidebar from '../../../components/sidebar/sidebar'
import { makeStyles } from '@material-ui/core';
import { Box } from '@mui/system';
import EmployeLeft from './employeLeft';
import EmployeeRight from './employeeRight';
import { useDispatch } from 'react-redux';
import EmployeeThunk from '../../../redux/thunk/employeeThunk';
import { useCookies } from 'react-cookie';
const useStyles=makeStyles({
  mainContainer:{
    display:'flex',
    flexDirection:'row',
    width:'100%',

  },
  sidebar:{
    width:'25%'
  },
  emloyee:{
    display:'flex',
    flexDirection:'row',
    padding:'2rem'
  },
  // #E1E1E1
  sideBorder:{
    borderRight: '1px solid #E1E1E1;',
    width:'0px',
    height:'auto',
    margin:'0 5vw',

  }
})

const Employee = () => {
  const [cookies] = useCookies(['token']);
  const classes=useStyles();

  const dispatch=useDispatch();
  useEffect(()=>{
    const token=cookies.token;
    dispatch(EmployeeThunk(token));
  },[])

  return (
    <Box component='div' className={classes.mainContainer}>
        <Box component='div' className={classes.sidebar}>
            <Sidebar/>
        </Box>
        <Box component='div'>
            <Header/>
            <Box component='section' className={classes.emloyee}>
              <EmployeLeft/>
              <Box component='hr' className={classes.sideBorder}></Box>
              <EmployeeRight/>
            </Box>
        </Box>
    </Box>
  )
}

export default Employee