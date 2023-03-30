import { List, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { Container, ListItem, ListItemButton } from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Dashboard from '../../images/dashboard.svg';
import attendance from '../../images/attendance.svg';
import leave from '../../images/leaves.svg';
import holiday from '../../images/holiday.svg';
import employee from '../../images/employee.svg';
import loan from '../../images/loan.svg';
import manager from '../../images/manager.svg';
import payroll from '../../images/payroll.svg';
import setup from '../../images/setup.svg';
import reimbursemment from '../../images/reimbursement.svg'
import downArrow from '../../images/downArrow.svg'





import DownMenu from '../ui/downMenu';

const useStyles = makeStyles({
    container:{
        backgroundColor:'#FCFCFC',
        width:'100%',
        height:'100%',
        overflow:'auto',
        position:'fixed',
        width:"22%"    
    },
    logoHeading:{
        fontSize:'2rem',
        marginTop:'2rem',
        // display:'flex',
        // flexDirection:'row',
        // justifyContent:'center',
        // alignItems:'start',
        fontWeight:'600',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    logosSup:{
        fontSize:'7px',
    },
    menuList:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'80%'
    },
    listContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
    },

    menuListbtn:{
        borderRadius:'10px',
    },
    activeList:{
        backgroundColor:'#2C2F32'
    },
    defaultIcon:{
        width:'1.2rem',
    }
});


const Sidebar = () => {
    const classes=useStyles();
    const [tab,settab]=useState('');
  return (
    <Box className={classes.container}>
       <Box className={classes.logoHeading}>
                <Box component='h1' >
                        BAKSH
                        <Box className={classes.logosSup} component='span'>
                        TM
                        </Box>
                </Box>
       </Box>
       <Box className={classes.listContainer} component='div'>
         <List className={classes.menuList}>
           <DownMenu label={"Dashboard"} icon={Dashboard} path={'/dashboard'} classes={classes}/>
           <DownMenu label={"Employees"} droplabel={[{label:"Add Employee",path:'/add-employee'},{label:"Manage Employee",path:'/manage-employees'}]} icon={employee} classes={classes} downArrow={downArrow} tab={tab} settab={settab}/>
           <DownMenu label={"Attendance"} droplabel={[{label:"Daily Attendance",path:'/daily-attendance'},{label:"Attendance Report",path:'/attendance-report'},{label:"Manage Attendance",path:'/manage-attendance'}]} icon={attendance} classes={classes} downArrow={downArrow} tab={tab} settab={settab}/>
           <DownMenu label={"Loan Management"} icon={loan} classes={classes} downArrow={downArrow}/>
           <DownMenu label={"Leaves"} icon={leave} classes={classes} downArrow={downArrow}/>
           <DownMenu label={"Payroll"} icon={payroll} classes={classes} downArrow={downArrow}/>
           <DownMenu label={"Reimbursement"} icon={reimbursemment} classes={classes} downArrow={downArrow}/>
           <DownMenu label={"Holidays"} icon={holiday} classes={classes} downArrow={downArrow}/>
           <DownMenu label={"Managers"} icon={manager} classes={classes} downArrow={downArrow}/>
           <DownMenu label={"Setup"} icon={setup} classes={classes}/>
         </List>
       </Box>
    </Box>
  )
}

export default Sidebar