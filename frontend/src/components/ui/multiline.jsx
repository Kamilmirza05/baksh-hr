import { FormControl, OutlinedInput } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core';


const useStyles=makeStyles({
    flexRow:{
        display:'flex',
        width:'100%',
        flex:1,
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
  root: {
    [`& fieldset`]: {
        border: '1px solid #E1E1E1',
      borderRadius: "10px !important",
    },
    width:'100%'
},
})
const MultiLineText = () => {
    const classOwn=useStyles();
  return (
    <FormControl >
  <OutlinedInput placeholder="Add Local Address" 
          multiline
          rows={4}
          className={classOwn.root}
          defaultValue="Local Address"
  />
  
</FormControl>
  )
}

export default MultiLineText