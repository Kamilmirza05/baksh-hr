import React, { useEffect } from 'react'
import Header from '../../../components/header/header'
import Sidebar from '../../../components/sidebar/sidebar'
import { makeStyles } from '@material-ui/core';
import { Box, Button} from '@mui/material'

import axios from 'axios';

const useStyles=makeStyles({
  mainContainer:{
    display:'flex',
    flexDirection:'row',
    width:'100%',

  },
  sidebar:{
    width:'25%'
  },
  emloyee:{
    display:'flex',
    flexDirection:'row',
    padding:'2rem'
  },
  // #E1E1E1
  sideBorder:{
    borderRight: '1px solid #E1E1E1;',
    width:'0px',
    height:'auto',
    margin:'0 5vw',

  },

})

const Employee = () => {
  const navigate=useNavigate();
  const [cookies] = useCookies(['token']);
  const classes=useStyles();
  const dispatch=useDispatch();
  const name=useSelector(state=>state.emp.name);
  const fatherName=useSelector(state=>state.emp.fatherName);
  const profilePic=useSelector(state=>state.emp.profilePic);
  const dateofJoining=useSelector(state=>state.emp.dateofJoining);
  const dob=useSelector(state=>state.emp.dob);
  const gender=useSelector(state=>state.emp.gender);
  const departmentId=useSelector(state=>state.emp.departmentId);
  const designationId=useSelector(state=>state.emp.designationId);
  const contactOne=useSelector(state=>state.emp.contactOne);
  const contactTwo=useSelector(state=>state.emp.contactTwo);
  const accountholderName=useSelector(state=>state.emp.accountholderName);
  const accountNumber=useSelector(state=>state.emp.accountNumber);
  const branchName=useSelector(state=>state.emp.branchName);
  // const accountNumber=useSelector(state=>state.emp.accountNumber);
  const bankId=useSelector(state=>state.emp.bankId);
  const employeeId=useSelector(state=>state.emp.employeeId);
  const status=useSelector(state=>state.emp.status);
  const salaryType=useSelector(state=>state.emp.salaryType);
  const salary=useSelector(state=>state.emp.salary);
  const bloodGroup=useSelector(state=>state.emp.bloodGroup);
  const emergencyContact=useSelector(state=>state.emp.emergencyContact);
  const kinname=useSelector(state=>state.emp.kinname);
  const relation=useSelector(state=>state.emp.relation);
  const relationContact=useSelector(state=>state.emp.relationContact);
  const localAddress=useSelector(state=>state.emp.localAddress);
  const permanentAddress=useSelector(state=>state.emp.permanentAddress);
  const martialStatus=useSelector(state=>state.emp.martialStatus);
  const nationality=useSelector(state=>state.emp.nationality);
  const email=useSelector(state=>state.emp.email);
  const password=useSelector(state=>state.emp.password);
  const managerId=useSelector(state=>state.emp.managerId)

  // const department=useSelector(state=>state.emp.employeeId);





  useEffect(()=>{

  },[])

  return (
    <Box component='div' className={classes.mainContainer}>
        <Box component='div' className={classes.sidebar}>
            <Sidebar/>
        </Box>

    </Box>
  )
}

export default Employee