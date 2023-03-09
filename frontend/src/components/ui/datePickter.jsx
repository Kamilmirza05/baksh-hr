import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Input, TextField, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core';

const useStyles=makeStyles({
       label:{
        fontFamily: 'Poppins',
        fontSize: '10px',
        fontWeight: '600',
        lineHeight: '15px',
        letterSpacing: '-0.02em',
        textAlign: 'left',
        color:'#868B90'
    },
    container:{
        display:'flex',
        width:'100%',
        flexDirection:'column'
    }
})
const DatePickterUi = ({classes,title}) => {
 const classStyle=useStyles();
 
 return (<>
    <Box component='div' className={classStyle.container}>
        <Typography component='h4' className={classStyle.label}>
            {title}
        </Typography>
        <DatePicker className={classes.root}/>
    </Box>
  </>)
}

export default DatePickterUi