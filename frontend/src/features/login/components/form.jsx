import { makeStyles, Typography } from '@material-ui/core'
import { Box, FormControl } from '@mui/material'
import React, { useState } from 'react'
import CheckBox from '../../../components/form/checkbox'
import ButtonUi from '../../../components/ui/button'
import InputText from '../../../components/ui/inputtext'
import Footer from './footer'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../../axios/axiosData'
import LoginThunk from '../../../redux/thunk/loginThunk'
import { useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie';


const useStyles=makeStyles({
   form:{
      gap:20,
   },
   e:{
      
   }
})
const Form = () => {
   const [cookies, setCookie] = useCookies(['userId','token','permission']);
   const classes=useStyles();
   const navigate=useNavigate();
   const dispatch=useDispatch();
   const [data,setdata]=useState({
      email:'',
      password:''
   }) 

   console.log(cookies)

   const dataHandler=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      console.log(name,value)
      setdata({...data,[name]:value})

   }

   const submitHandler=()=>{
      dispatch(LoginThunk(data,navigate,setCookie))
   }
   return (<div className='ml-[10%] mt-[12%] w-[70%]'>
     <div>
        <h1 className='text-login-heading'>Hello!</h1>
        <p className='text-darkGray text-login-desc '>Welcome to our login page! We're happy to see you back. </p>
     </div>
     <div className='flex flex-col relative mt-[30%] gap-5'>
      <FormControl className={classes.form}>
            <InputText label={"Email"} changeHandler={dataHandler} name={'email'}/>
            <InputText label={"Password"} changeHandler={dataHandler} name={'password'}/>
            <Box className='flex flex-row items-center justify-between'>
                  <CheckBox label={'Remember me'}/>
                  <Typography style={{

                     fontFamily:' Poppins',
                     fontSize: '12px',
                     fontWeight: '600',
                     lineHeight: '18px',
                     letterSpacing: '-0.02em',
                     textAlign: 'right',
                     color:'#868B90'
                  }}>
                  Forget password?
                  </Typography>
            </Box>
            <ButtonUi label='Login' clickHandler={submitHandler} />

      </FormControl>
     </div>
     <Footer/>

  </div>)
}

export default Form