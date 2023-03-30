import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/header'
import Sidebar from '../../../components/sidebar/sidebar'
import { makeStyles } from '@material-ui/core';
import { Box} from '@mui/material'
import SearchBar from '../ui/seachBar';


const useStyles=makeStyles({
    mainContainer:{
      display:'flex',
      flexDirection:'row',
      width:'100%',

    },
    sidebar:{
      width:'25%'
    },
    employee:{
      display:'flex',
      flexDirection:'row',
      padding:'2rem',
      width:'100%'
    },
    // #E1E1E1
    sideBorder:{
      borderRight: '1px solid #E1E1E1;',
      width:'0px',
      height:'auto',
      margin:'0 5vw',
    },
    formikDiv:{
      // display:'flex',
      // flexDirection:'row',
      width:'100%'
    },
    column:{
      display:'flex',
      flexDirection:'column',
      width:'70%'
    }

  })


  const Manageattendance = () => {
      const classes=useStyles();
      const [attendance,setattendance]=useState([])
    return (
      <Box component='div' className={classes.mainContainer}>
          <Box component='div' className={classes.sidebar}>
              <Sidebar/>
          </Box>
          <Box component='div' className={classes.column}>
              <Header heading={"Manage Attendance"}/>
              <SearchBar setattendance={setattendance}/>
          </Box>
      </Box>
    )
  }

  export default Manageattendance