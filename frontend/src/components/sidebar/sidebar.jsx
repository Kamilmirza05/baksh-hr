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
        // font: "Poppins",
        width:'100%',
        height:'100%',
        overflow:'auto',
        position:'fixed',
        width:"22vw"    
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
    list:{
        cursor:'pointer',
        //styleName: 14 B;
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '21px',
        letterSpacing: '-0.02em',
        textAlign: 'left',
        gap:'0.8rem',
        padding:'12px, 11px, 12px, 11px',
        width:'100%',
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
           <DownMenu label={"Dashboard"} icon={Dashboard} path={'/'} classes={classes}/>
           <DownMenu label={"Employees"} droplabel={[{label:"Add Employee",path:'/AddEmployee'},{label:"Manage Employee",path:'/Employees'}]} icon={employee} classes={classes} downArrow={downArrow} tab={tab} settab={settab}/>
           <DownMenu label={"Attendance"} droplabel={[{label:"Daily Attendance",path:'/DailyAttendance'},{label:"Attendance Report",path:'/Attendance'},{label:"Manage Attendance",path:'/Attendance'}]} icon={attendance} classes={classes} downArrow={downArrow} tab={tab} settab={settab}/>
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