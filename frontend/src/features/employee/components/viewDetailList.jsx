import { Box, ListItem} from '@mui/material'
import React from 'react'
import { List } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles=makeStyles({
  mainContainer:{
    position:'relative',
    left:'3rem',
    top:'2rem',
    borderRight: '2px solid #E1E1E1',
    width:'fit-content',
    // paddingRight:'1.1rem'
  },
  listContainer:{
    display:'flex',
    flexDirection:'column',
    gap:'10px'
  },
  listItem:{
    //styleName: 14 B;
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '21px',
    letterSpacing: '-0.02em',
    textAlign: 'right',
    color:'#868B90',
    cursor:'pointer',
    width:'100%'
  },
  borderRight:{
    outline:'3px solid black',
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
    height:'auto'
  }
})
const ViewDetailList = () => {
  const classes=useStyles();
  return (
    <Box className={classes.mainContainer}>
      <List className={classes.listContainer}>
        <ListItem className={classes.listItem}>
          Personal Details
        </ListItem>
        <ListItem className={classes.listItem}>
          Company Details
        </ListItem>
        <ListItem className={classes.listItem}>
          Financial Details
        </ListItem>
        <ListItem className={classes.listItem}>
          Bank Details
        </ListItem>
        <ListItem className={classes.listItem}>
          Emergency Details
        </ListItem>
        <ListItem className={classes.listItem}>
           Account Login
        </ListItem>
      </List>
    </Box>
  )
}

export default ViewDetailList