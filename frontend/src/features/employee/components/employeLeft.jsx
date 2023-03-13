import { Input, makeStyles } from '@material-ui/core'
import { Box, Typography } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import React from 'react'
import FileInput from '../../../components/ui/fileInput'
import InputText from '../ui/input'
import DatePickterUi from '../../../components/ui/datePickter';
import SelectUi from '../../../components/ui/select';
import MultiLineText from '../../../components/ui/multiline';
import InputNumber from '../../../components/ui/inputNumber';
import EmployeeBank from './employeeBank';
import { useDispatch,useSelector } from 'react-redux';
import { employeeAction } from '../../../redux/slice/employeeSlice';
import SelectLocalUi from '../../../components/ui/selectLocal';

const useStyles=makeStyles({
    container:{
        display:'flex',
        flexDirection:'column',
        position:'relative',
        marginTop:'1.5rem',
        paddingLeft:'0.8rem',
        width:'auto',
        gap:'20px',
        height:'auto',
        // border:'1px solid black'
        
        // #
    },
    innerContainer:{
      display:'flex',
      flexDirection:'column',
      position:'relative',
      marginTop:'1.5rem',
      paddingLeft:'0.8rem',
      width:'30vw',
      gap:'20px',
      height:'100%',
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
        justifyContent:'center',
        alignItems:'center',
        gap:20
    },
    border:{
      borderTop: '1px solid #E1E1E1',
      position:'relative',
      marginTop:'1rem',
      width:'auto',
      transform:'rotate(180)'
    },

})
const EmployeLeft = () => {
  const dispatch=useDispatch();
  const employee=useSelector(state=>state.emp.employeeData);
  const name=useSelector(state=>state.emp.name);
  const fatherName=useSelector(state=>state.emp.fatherName);
  const profilePic=useSelector(state=>state.emp.profilePic);

  console.log(employee)
  const classes=useStyles();
  const Country=[
    'pakistan',
    'india'
  ]  
  const Gender=[
    'male',
    'female',
    'other'
  ]



  return (
    <Box className={classes.container} component='div'>
      <Box component='div'>
        <Typography component='h1' className={classes.personalLabel}>
            Personal Details
        </Typography>
      </Box>
      <Box className={classes.innerContainer} component='div'>
        <FileInput state={profilePic} setState={employeeAction.profileAction}/>
        <InputText placeholder={'Add Full name'} title={'name'} setState={employeeAction.addNameAction} state={name}/>
        <InputText placeholder={'Add Father Name'} title={'Father Name'}  setState={employeeAction.fatherNameAction} state={fatherName}/>
        <Box className={classes.flexRow}>
            <DatePickterUi title={'Date of Birth'} setState={employeeAction.dobAction} classes={classes}/>
            <SelectLocalUi title={'Gender'} data={Country} setState={employeeAction.genderAction} classes={classes}/>
        </Box>
        <Box className={classes.flexRow}>
            <InputNumber label={'Phone 1'} classes={classes}/>
            <InputNumber label={'Phone 2'} classes={classes}/>

        </Box>
        <MultiLineText label={'Local Address'} placeholder={"Add Local Address"}/>
        <InputText placeholder={'Add Permanent Address'} title={'Permanent Address'}/>
        <Box className={classes.flexRow}    >
            <SelectUi title={'Nationality'} data={Gender} classes={classes}/>
            <SelectUi title={'Marital Status'} data={Country} classes={classes}/>
        </Box>
        <Box component='hr' className={classes.border}></Box>
        <EmployeeBank parentClass={classes}/>
      </Box>
    </Box>

  )
}

export default EmployeLeft 