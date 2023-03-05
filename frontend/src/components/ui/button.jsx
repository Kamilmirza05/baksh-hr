import { Button } from '@mui/material';
import React from 'react'


const ButtonUi= ({label='sample'}) => {
  return (
    <Button className='!bg-primary' variant="contained" color='primary'>{label} </Button>
  )
}

export default ButtonUi;