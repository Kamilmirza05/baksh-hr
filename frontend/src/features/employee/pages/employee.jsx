import { Formik, useFormik } from 'formik';
import React, { useEffect } from 'react'
import Header from '../../../components/header/header'
import Sidebar from '../../../components/sidebar/sidebar'
import { makeStyles } from '@material-ui/core';
import { Box, Button, FormControl} from '@mui/material'
import EmployeLeft from '../components/employeLeft';
import EmployeeRight from '../components/employeeRight';
import { useDispatch, useSelector } from 'react-redux';
import EmployeeThunk from '../../../redux/thunk/employeeThunk';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { adminApi } from '../../../axios/axiosData';
import { useNavigate } from 'react-router-dom';
import validationSchema from './validations';

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

  },

})


// const validationSchema = yup.object({
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required'),
// });


const Employee = () => {



  const navigate=useNavigate();
  const [cookies] = useCookies(['token']);
  const classes=useStyles();
  const dispatch=useDispatch();
  const name=useSelector(state=>state.emp.name);
  const fatherName=useSelector(state=>state.emp.fatherName);
  const profilePic=useSelector(state=>state.emp.profilePic);
  const dateofJoining=useSelector(state=>state.emp.dateofJoining);
  const dob=useSelector(state=>state.emp.dob);
  const gender=useSelector(state=>state.emp.gender);
  const departmentId=useSelector(state=>state.emp.departmentId);
  const designationId=useSelector(state=>state.emp.designationId);
  const contactOne=useSelector(state=>state.emp.contactOne);
  const contactTwo=useSelector(state=>state.emp.contactTwo);
  const accountholderName=useSelector(state=>state.emp.accountholderName);
  const accountNumber=useSelector(state=>state.emp.accountNumber);
  const branchName=useSelector(state=>state.emp.branchName);
  // const accountNumber=useSelector(state=>state.emp.accountNumber);
  const bankId=useSelector(state=>state.emp.bankId);
  const employeeId=useSelector(state=>state.emp.employeeId);
  const status=useSelector(state=>state.emp.status);
  const salaryType=useSelector(state=>state.emp.salaryType);
  const salary=useSelector(state=>state.emp.salary);
  const bloodGroup=useSelector(state=>state.emp.bloodGroup);
  const emergencyContact=useSelector(state=>state.emp.emergencyContact);
  const kinname=useSelector(state=>state.emp.kinname);
  const relation=useSelector(state=>state.emp.relation);
  const relationContact=useSelector(state=>state.emp.relationContact);
  const localAddress=useSelector(state=>state.emp.localAddress);
  const permanentAddress=useSelector(state=>state.emp.permanentAddress);
  const martialStatus=useSelector(state=>state.emp.martialStatus);
  const nationality=useSelector(state=>state.emp.nationality);
  const email=useSelector(state=>state.emp.email);
  const password=useSelector(state=>state.emp.password);
  const managerId=useSelector(state=>state.emp.managerId)
  const initialValues = {
    email: '',
    password:'',
    // name:'',
    // fatherName:'',
    // profilePic:'',
    // dateofJoining:'',
    // dob:'',
    // gender:'',
    departmentId:'',
    designationId:'',
    // contactOne:'',
    // contactTwo:'',
    // accountholderName:'',
    // accountNumber:'',
    // branchName:'',
    // bankId:'',
    // employeeId:'',
    // status:'',
    // salaryType:'',
    // salary:'',
    // bloodGroup:'',
    // emergencyContact:'',
    // kinname:'',
    // relation:'',
    // relationContact:'',
    // localAddress:'',
    // permanentAddress:'',
    // martialStatus:'',
    // nationality:'',
    // managerId:'',
  };


  useEffect(()=>{
    const token=cookies.token;
    dispatch(EmployeeThunk(token));
  },[])

  const submitHandler=()=>{
      const token=cookies.token;
      console.log(bankId)
      let formData = new FormData();    
      formData.append('name', name);   
      formData.append('fatherName', fatherName);
      formData.append('employeePhoto',profilePic)
      formData.append('dob',dob)
      formData.append('dateofJoining',dateofJoining)
      formData.append('gender',gender);
      formData.append('departmentId',departmentId);
      formData.append('designationId',designationId);
      formData.append('contactOne',contactOne);
      formData.append('contactTwo',contactTwo)
      formData.append('holderName',accountholderName)
      formData.append('localAddress',localAddress)
      formData.append('nationality',nationality)
      formData.append('permanentAddress',permanentAddress)
      formData.append('martialStatus',martialStatus);
      formData.append('status',status);
      formData.append('email',email);
      formData.append('password',password);
      formData.append('bloodGroup',bloodGroup);
      formData.append('managerId',managerId);
      formData.append('accountNumber',accountNumber)
      formData.append('bankId',bankId);
      formData.append('branch',branchName);
      formData.append('relation',relation);
      formData.append('emergencyContact',emergencyContact);
      formData.append('kinname',kinname);
      formData.append('salaryType',salaryType);
      formData.append('salary',salary);
      formData.append('kinPhone',relationContact);
      formData.append('employeeId',employeeId);


      axios.post(adminApi+'/create-employee',formData,{
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response)=>{
        navigate('/employees')
      })


      // alert(`
      // name:${name} 
      // \ fatherName:${fatherName} 
      // \ profilePic:${profilePic}
      // \ dob:${dob}
      // \ dateofJoining:${dateofJoining}
      // \ gender:${gender}
      // \ departmentId:${departmentId}
      // \ designationId:${designationId}
      // \ contactOne:${contactOne}
      // \ contactTwo:${contactTwo}
      // \ accountholderName:${accountholderName}
      // \ accountNumber:${accountNumber}
      // \ bankId:${bankId}
      // \ branchName:${branchName}
      // \ salaryType:${salaryType}
      // \ salary:${salary}
      // \ bloodGroup:${bloodGroup}
      // \ status:${status}
      // \ employeeId:${employeeId}
      // \ emergencyContact:${emergencyContact}
      // \ kinname:${kinname}
      // \ relation:${relation}
      // \ relationContact:${relationContact}
      // \ localAddress:${localAddress}
      // \ permanentAddress:${permanentAddress}
      // \ martialStatus:${martialStatus}
      // \ nationality:${nationality}
      // `)
  }
  console.log(initialValues)
  return (
    <Box component='div' className={classes.mainContainer}>
        <Box component='div' className={classes.sidebar}>
            <Sidebar/>
        </Box>
        <Box component='div'>
            <Header/>
            {/* <Box component='section' className={classes.emloyee}> */}
  
            <Formik
                initialValues={{
                  ...initialValues
                }}
                validationSchema={validationSchema}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(values) => {
                  console.log('hit....')
                  // console.log('hitt....',values)
                  // submitHandler();
                }}
            >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              isValid,
              dirty,
              touched,
              values
            }) => (
              <>
              <FormControl
                onClick={handleSubmit} 
              >
                {/* <EmployeLeft/> */}
                <Box component='hr' className={classes.sideBorder}></Box>
                <EmployeeRight submitHandler={submitHandler} 
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                  isValid={isValid}
                  dirty={dirty}
                  touched={touched}
                  values={values}
                />
              </FormControl>
              </>
              )}
            </Formik>
            {/* </Box> */}

        </Box>
    </Box>
  )
}

export default Employee