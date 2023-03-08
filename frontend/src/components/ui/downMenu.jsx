import React from 'react'

import { Container, ListItem, ListItemButton,ListItemIcon, ListItemText ,makeStyles } from '@mui/material';
import { Box } from '@mui/system'

const DownMenu = ({classes,icon,label,downArrow}) => {
  return (<>
                <ListItemButton className={classes.list} style={{borderRadius:'10px'}}>
                   <Box component='img' src={icon}/>
                   <ListItemText primary={label}/>
                   <Box component='img' src={downArrow} onClick/>  
                </ListItemButton>
  </>
  )
}

export default DownMenu