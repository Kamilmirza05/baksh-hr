import React from 'react'
import background from '../../../images/background.jpg'

const LoginRight = () => {
  return (
    <div className='bg-homeRight bg-cover bg-center flex items-end     w-4/6 h-screen overflow-hidden'>
     {/* sm:justify-start md:justify-start lg:justify-center xl:justify-center */}
     <div className='flex justify-end pb-16    items-end h-fit w-full'>
        <h1  className="w-2/6 whitespace-pre-line break-word   text-lightGray h-full text-poppins-300 ">
          Where&nbsp;<span className='text-poppins-600 '>food and community</span>&nbsp;come together.
        </h1>
     </div>
    </div>
  )
}

export default LoginRight