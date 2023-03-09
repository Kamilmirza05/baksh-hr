import React from 'react'

import { Container, List, ListItem, ListItemButton,ListItemIcon, ListItemText  } from '@mui/material';
import { Box } from '@mui/system'
import { makeStyles } from '@material-ui/core';

const useStyles=makeStyles({
   childList:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'start !important',
    alignItems:'start !important',
    width:'86%',
    backgroundColor:'blue ' ,
    borderRadius:'10px',
    padding:'12px 11px 12px 11px !important',

   },
   nestedList:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'end !important',
    alignItems:'end !important',
    width:'100%'
   },
   rotate:{
    '-webkit-transform': 'rotateX(180deg)',
    transform: 'rotateX(180deg)',
   }
})



const DownMenu = ({classes,icon,label,downArrow,droplabel,tab,settab}) => {

  const classStyle=useStyles();

  const openHandler=(value)=>{
    if(value===tab){
      settab('')
    }else{
      settab(value)
    }
  }
  return (<>
                <ListItemButton className={classes.list} style={{borderRadius:'10px'}}>
                   <Box component='img' src={icon}/>
                   <ListItemText primary={label}/>
                   <Box component='img' src={downArrow} className={tab===label && classStyle.rotate} onClick={()=>{openHandler(label)}}/>
                </ListItemButton>

                    {droplabel?.length>0 && tab.length>0 && 
                       <List className={classStyle.nestedList}> 
                        {droplabel?.map((page)=>{
                          return<ListItemButton className={classStyle.childList} style={{borderRadius:'10px'}}>
                              {page.label}
                          </ListItemButton>
                        })}
                      </List>
                      
                      }

  </>
  )
}

export default DownMenu