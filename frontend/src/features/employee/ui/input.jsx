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
        width:'100%'
    }
})
const InputText = ({placeholder,title,setState,state}) => {
  const classes=useStyles();
  const dispatch=useDispatch();
  const ref=React.createRef();

  const handleChange=(e)=>{
    console.log('hit...')
    dispatch(setState(e.target.value));
  }

  return (<Box className={classes.container}  component='div'>
            <Typography component='h4' className={classes.label}>
                {title}
            </Typography>
            <TextField onBlur={handleChange}  value={state} type='text' color='primary' variant='outlined' placeholder={placeholder} className={classes.root}/>
    </Box>)
}

export default InputText