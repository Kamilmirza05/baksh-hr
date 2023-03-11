import React from 'react'
import Footer from './footer'
import LoginLeft from './loginLeft'
import LoginRight from './loginRight'
import AlertApp from '../../../components/ui/alert';

const Login = () => {
  return (
    <div className='w-full h-full flex flex-row'>
      <AlertApp/>
      <LoginLeft />
      <LoginRight/>
    </div>
  )
}

export default Login