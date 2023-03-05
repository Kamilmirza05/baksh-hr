import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (<Box className="flex flex-row justify-between text-darkGray mt-[30%]">
    <Typography
            style={{
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '18px',
            letterspacing: '-0.02em',
            textAlign: 'center',
        }}

    >
       Terms of service
    </Typography>
    <Typography
            style={{
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '18px',
            letterspacing: '-0.02em',
            textAlign: 'center',
        }}

    >
        Privacy Policy
    </Typography>
    <Typography
            style={{
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '18px',
            letterspacing: '-0.02em',
            textAlign: 'center',
        }}

    >
       ©Copyright 2023
    </Typography>
  </Box>)
}

export default Footer