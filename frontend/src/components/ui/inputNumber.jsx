import { Box, makeStyles } from '@material-ui/core';
import { Input, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';

const useStyles=makeStyles({
    'input':{

        // outline:'none'
    },
    root: {
        [`& fieldset`]: {
            border: '1px solid #E1E1E1',
          borderRadius: "10px !important",
        },
          '& input[type=number]': {
              '-moz-appearance': 'textfield'
          },
          '& input[type=number]::-webkit-outer-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0
          },
          '& input[type=number]::-webkit-inner-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0
          },
        width:'100%'
    },

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
        width:'100%',
        marginTop:'0.7rem'
    }
})
const InputText = (props) => {
    const {
        placeholder,
        title,
        name,
        label,
        helperText, 
        handleChange, 
        value, 
        error,
        handleBlur
    }=props

  const dispatch=useDispatch();
  const classes=useStyles();

//   const handleChange=(e)=>{
//     dispatch(setState(e.target.value))
//   }
  return (<Box className={classes.container}  component='div'>
            <Typography component='h4' className={classes.label}>
                {label}
            </Typography>
            <TextField 
               type='number'   
               color='primary' 
               variant='outlined' 
               placeholder={placeholder} 
                value={value}
                helperText={helperText}  
                error={error}
                InputProps={{
                    classes:{input: classes.input}
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                onMouseLeave={handleChange}    
                name={name}
                className={classes.root}
            />
    </Box>)
}

export default InputText