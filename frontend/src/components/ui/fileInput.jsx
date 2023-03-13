import { Box, makeStyles } from '@material-ui/core'
import { Label } from '@mui/icons-material'
import { Input } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import file from '../../images/file.svg'

const useStyles=makeStyles({
    container:{
        display:'flex',
        cursor:'pointer'
    },
    file:{
        width:'133px',
        height:'133px',
        border: '1px dashed #868B90',
        borderRadius: '8px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        
    },
    fileLogo:{
        display:'flex',

    },
    filedescription:{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight:'400',
        fontSize: '10px',
        lineHeight: '15px',
        textAlign: 'center',
        letterSpacing: '-0.02em'
    }
})
const FileInput = ({setState,state}) => {
    const dispatch=useDispatch();
    const classes=useStyles();

    const HandleChange=(e)=>{
        dispatch(setState(e.target.files[0]));
    }
    console.log(state)
  return (
    <Box component='div' className={classes.container}>
       <input type='file' hidden onChange={HandleChange}   name="profile" id='profile'/>
       <label htmlFor='profile'>
        <Box component='div' className={classes.file}>
             {state ?            
                 <Box component='img' src={URL.createObjectURL(state)} className={classes.fileLogo}/>
                 :
                 <>
                    <Box component='img' src={file} className={classes.fileLogo}/>
                    <p className={classes.filedescription}>Drop a file or browse a file to upload</p>
                </>
             }


             
        </Box>
       </label>
        <Box component='div' className={classes.container}>
        </Box>
    </Box>
  )
}

export default FileInput