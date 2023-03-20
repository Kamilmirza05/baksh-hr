import { Input, makeStyles } from '@material-ui/core'
import { Box, Typography,Button } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import React, { useEffect } from 'react'
import FileInput from '../../../components/ui/fileInput'
import InputText from '../ui/input'
import DatePickterUi from '../../../components/ui/datePickter';
import SelectUi from '../../../components/ui/select';
import MultiLineText from '../../../components/ui/multiline';
import InputNumber from '../../../components/ui/inputNumber';
import EmployeeBank from './employeeBank';
import EmployeeFinancial from './employeeFinanicial';
import EmergencyDetail from './emergencyDetail';
import { useDispatch, useSelector } from 'react-redux';
import { employeeAction } from '../../../redux/slice/employeeSlice';
import axios from 'axios';
import { adminApi } from '../../../axios/axiosData';
import SelectLocalUi from '../../../components/ui/selectLocal';
import AccountLogin from './accountLogin';


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
      borderTop: '1px solid #E1E1E1;',
      position:'relative',
      marginTop:'1rem',
      width:'auto',
      transform:'rotate(180)'
    },
    subBtn:{
      backgroundColor:'#C49150 !important',
      color:'white !important',
      width:'13.3rem',
      height:'46px !important',
      borderRadius:'10px !important'
    },
    flexEnd:{
        display:'flex',
        width:'100%',
        flex:1,
        justifyContent:'end',
        alignItems:'end',
        gap:20,
        marginTop:'2rem',
        paddingRight:'2rem',
        marginRight:'3rem'
    }

})

const status=[
  'pending',
  'active',
  'inactive'
]
const EmployeRight = ({
  submitHandler,              
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
  isValid,
  dirty,
  touched,
  values}) => {
  const dispatch=useDispatch();
  const classes=useStyles();
  const departmentId=useSelector(state=>state.emp.departmentId);
  const departments=useSelector(state=>state.emp.departments);
  const designations=useSelector(state=>state.emp.designations);
  const dateofJoining=useSelector(state=>state.emp.dateofJoining);
  const managers=useSelector(state=>state.emp.managers);

  console.log(values)
  useEffect(()=>{
    const getDesignation=async ()=>{
      const response=await axios.get(adminApi+`/designation/${values.departmentId}`)
      dispatch(employeeAction.deisgnationsAction(response?.data?.designations))
      console.log(response)
    }

    let timerOne;
    if(parseInt(values.departmentId)>0){
      timerOne=setTimeout(getDesignation,1000);
    }

    return ()=>{
      clearTimeout(timerOne)
    }
  },[values.departmentId])

  const Country=[
    'pakistan',
    'india'
  ]  
  const Gender=[
    'male',
    'female',
    'other'
  ]




  const deparmentHandler=(e)=>{
   
  }

  return (
    <Box className={classes.container} component='div'>
      <Box component='div'>
        <Typography component='h1' className={classes.personalLabel}>
            Company Details
        </Typography>
      </Box>
      <Box className={classes.innerContainer} component='div'>
        {/* <InputText setState={employeeAction.employeeIdAction} placeholder={'Add Employee ID'} title={'Employee Id'}/> */}
        <SelectUi 
           title={'Department'}  
           data={departments} 
           value={values.departmentId} 
           error={Boolean(touched.departmentId && errors.departmentId)} 
           helperText={touched.departmentId && errors.departmentId}  
           name="departmentId" 
           touched={touched}
           handleChange={handleChange}
           handleBlur={handleBlur}
           placeholder={"Select the Department"}   
           classes={classes} 
           use={'fetch'}
        />
        
        <SelectUi 
            title={'Designation'} 
            data={designations}  
            classes={classes}
            value={values.designationId} 
            error={Boolean(touched.designationId && errors.designationId)} 
            helperText={touched.designationId && errors.designationId}  
            name="designationId" 
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            placeholder={"Select the Department"}   
        />

        <Box className={classes.flexRow}>
            <DatePickterUi title={'Date of Joining'} setState={employeeAction.dateofJoiningAction} state={dateofJoining} classes={classes}/>
            <SelectLocalUi title={'Status'} setState={employeeAction.statusAction} data={status} classes={classes}/>
        </Box>
        <SelectUi title={'Manager'} 
                  data={managers} 
                  setState={employeeAction.managerAction} 
                  classes={classes}/>



        {/* <Box className={classes.flexRow}    >
            <SelectUi title={'Nationality'} data={Gender} classes={classes}/>
            <SelectUi title={'Marital Status'} data={Country} classes={classes}/>
        </Box> */}
        <Box component='hr' className={classes.border}></Box>
        {/* <EmployeeFinancial/> */}
        <Box component='hr' className={classes.border}></Box>

        {/* <EmergencyDetail/> */}
        <AccountLogin 
              errors={errors}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              isValid={isValid}
              dirty={dirty}
              values={values}
              touched={touched}
        />

        <Box component='div' className={classes.flexEnd}>
             <Button>Save as draft</Button>
             <Button className={classes.subBtn} type="submit">Submit</Button>
           </Box>
      </Box>
    </Box>

  )
}

export default EmployeRight 