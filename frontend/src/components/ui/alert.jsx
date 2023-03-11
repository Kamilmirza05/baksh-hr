import { makeStyles } from '@material-ui/core';
import { AlertTitle} from '@mui/material'
import Alert from '@mui/material/Alert';
import React from 'react'
import { useSelector } from 'react-redux';

const useStyles=makeStyles({
    alert:{
        position:'fixed',
        width:''
    }
})

const AlertApp = () => {
    const classes=useStyles();
    const msg=useSelector(state=>state.app.msg);
    const error=useSelector(state=>state.app.error);
    console.log(msg,error)

  return (
    <>
       {error &&
        <Alert severity="error" className={classes.alert}>
        <AlertTitle>Error</AlertTitle>
           <p>{msg}</p>
        </Alert>
       }
    </>
   )
}

export default AlertApp