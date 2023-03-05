import React from 'react'
import Footer from './footer'
import Form from './form'
// import logo from 'images/'
const LoginLeft = () => {
  return (
    <div className='h-screen bg-blue-400 w-2/6 '>
       <div className='text-poppins-400 ml-[10%] mt-[10%] font-normal	'>
         BAKSH<span className='text-[0.5rem] align-text-top'>TM</span>
         <Form/>
       </div>
    </div>
  )
}

export default LoginLeft