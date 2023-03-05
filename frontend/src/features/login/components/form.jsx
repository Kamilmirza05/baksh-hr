import { Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import CheckBox from '../../../components/form/checkbox'
import ButtonUi from '../../../components/ui/button'
import InputText from '../../../components/ui/inputtext'
import Footer from './footer'

const Form = () => {
  return (<div className='ml-[10%] mt-[12%] w-[70%]'>
     <div>
        <h1 className='text-login-heading'>Hello!</h1>
        <p className='text-darkGray text-login-desc '>Welcome to our login page! We're happy to see you back. </p>
     </div>
     <div className='flex flex-col relative mt-[30%] gap-5'>
        <InputText label={"Email"}/>
        <InputText label={"Password"}/>
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
        <ButtonUi label='Login' />
     </div>
     <Footer/>

  </div>)
}

export default Form