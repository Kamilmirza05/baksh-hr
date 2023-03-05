import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiCheckbox-colorPrimary.Mui-checked': {
        color: '#C49A50', // set the color of the checkbox when it is checked
      },
    },
  }));

const CheckBox = ({label}) => {
    const classes=useStyles();
  return (
    <FormGroup >
       <FormControlLabel className={classes.root} control={<Checkbox defaultChecked  color='primary'  />} 
       label={<Typography 
       style={{
        //styleName: 12;
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '18px',
            letterSpacing: '-0.02em',
            textAlign: 'left',
            color:'#868B90'
        }}>
        {label}
       </Typography>} />
    </FormGroup>
  )
}

export default CheckBox