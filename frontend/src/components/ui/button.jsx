import { makeStyles } from '@material-ui/core';
import { Button } from '@mui/material';
import React from 'react'

const useStyles=makeStyles({
  btn:{
    padding:10,
    color:'white',
    backgroundColor:'#C49A50 !important'
  }
})
const ButtonUi= ({label='sample',clickHandler}) => {
  const classes=useStyles();
  return (
    <Button className={classes.btn} variant="contained" onClick={clickHandler}>{label} </Button>
  )
}

export default ButtonUi;