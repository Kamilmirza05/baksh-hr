
import { Box } from '@mui/material';
import React from 'react'
import Header from '../../../components/header/header';
import Sidebar from '../../../components/sidebar/sidebar';
import {makeStyles} from '@mui/material';
import AttendancedataTable from '../components/attendancedataTable';


const useStyles=makeStyles({
  mainContainer:{
    display:'flex',
    flexDirection:'row',
    width:'100%',

  },
  sidebar:{
    width:'25%'
  },
  attendance:{
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

  },

});

export default function Attendance() {
  const classes = useStyles();
  return (
    <Box component='div' className={classes.mainContainer}>
    <Box component='div' className={classes.sidebar}>
        <Sidebar/>
    </Box>
    <Box component='div'>
        <Header/>
        <Box component='section' className={classes.attendance}>
          <AttendancedataTable/>
        </Box>
    </Box>
</Box>
  )
}
