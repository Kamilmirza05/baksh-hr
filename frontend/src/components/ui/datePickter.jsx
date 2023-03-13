import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Input, TextField, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';

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
const DatePickterUi = ({classes,title,setState,state}) => {
 const dispatch=useDispatch();
 const classStyle=useStyles();
 const handleChange=(date)=>{
    dispatch(setState(date.toISOString()));
 }
 return (<>
    <Box component='div' className={classStyle.container}>
        <Typography component='h4' className={classStyle.label}>
            {title}
        </Typography>
        <DatePicker onChange={handleChange}  className={classes.root}/>
    </Box>
  </>)
}

export default DatePickterUi