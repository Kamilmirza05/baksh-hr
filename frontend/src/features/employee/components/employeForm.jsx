import { Input, makeStyles } from '@material-ui/core'
import { Box, Typography } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import React from 'react'
import FileInput from '../../../components/ui/fileInput'
import InputText from '../ui/input'
import DatePickterUi from '../../../components/ui/datePickter';
import SelectUi from '../../../components/ui/select';
import MultiLineText from '../../../components/ui/multiline';

const useStyles=makeStyles({
    container:{
        display:'flex',
        flexDirection:'column',
        position:'relative',
        top:'1.5rem',
        paddingLeft:'0.8rem',
        width:'30vw',
        gap:'20px'
    },
    personalLabel:{
        fontFamily: 'Poppins',
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '27px',
        letterSpacing: '-0.02em',
        textAlign: 'left',
        color:'#C49150',
  
    },
    root: {
        [`& fieldset`]: {
            border: '1px solid #E1E1E1',
          borderRadius: "10px !important",
        },
        width:'100%'
    },
    flexRow:{
        display:'flex',
        width:'100%',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:10
    }
})
const EmployeForm = () => {
  const classes=useStyles();
  
  return (
    <Box className={classes.container} component='div'>
      <Box component='div'>
        <Typography component='h1' className={classes.personalLabel}>
            Personal Details
        </Typography>
      </Box>
      <Box className={classes.container} component='div'>
        <FileInput/>
        <InputText placeholder={'Add Full name'} title={'name'}/>
        <InputText placeholder={'Add Father Name'} title={'Father Name'}/>
        <Box className={classes.flexRow}>
            <DatePickterUi title={'Date of Birth'} classes={classes}/>
            <SelectUi title={'Gender'} classes={classes}/>
        </Box>
        <MultiLineText/>

      </Box>
    </Box>

  )
}

export default EmployeForm