import React from 'react'
import Footer from './footer'
import LoginLeft from './loginLeft'
import LoginRight from './loginRight'

const Login = () => {
  return (
    <div className='w-full h-full flex flex-row'>
      <LoginLeft />
      <LoginRight/>
    </div>
  )
}

export default Login