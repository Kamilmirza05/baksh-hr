import { Box} from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import InputText from '../ui/input'
import InputNumber from '../../../components/ui/inputNumber';
import SelectUi from '../../../components/ui/select';
import SelectLocalUi from '../../../components/ui/selectLocal';
import { useDispatch, useSelector } from 'react-redux';
import { employeeAction } from '../../../redux/slice/employeeSlice';


const BankName=[
    'UBL',
    'HBL'
]; 
const BranchName=[
    'Garden Town',
    "Bahari Tow"
]
const useStyles=makeStyles({
    container:{
        position:'relative',
        top:'1rem'
    },
    title:{
        color:'#C49150',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '27px',
        letterSpacing: '-0.02em',
    },
    fields:{
        display:'flex',
        flexDirection:'column',
        gap:'1rem',
        marginTop:'0.5rem'
    },
    label:{
        //styleName: 10 B;
        fontSize: '10px',
        fontWeight: '600',
        lineHeight: '15px',
        letterSpacing: '-0.02em',
        textAlign: 'left',
    }
})

const AccountLogin = ({parentClass}) => {
  const classes=useStyles()
  const dispatch=useDispatch();
  const salaryTypes=useSelector(state=>state.emp.salaryTypes);

  return (
    <Box component='div' className={classes.container}>
       <Box component='h1' className={classes.title}>Account Login</Box>
       <Box component='div' className={classes.fields}>
           <InputText placeholder={'Email'} setState={employeeAction.emailAction} title={'Add the Email'}/> 
           <InputText placeholder={'Password'} setState={employeeAction.passwordAction} title={'Add the Password'}/> 

            {/* <SelectLocalUi    title={'Select Salary Type'} setState={employeeAction.salaryTypeAction} data={salaryTypes} classes={classes}/> */}
            {/* <InputNumber label={'Salary'} classes={classes} setState={employeeAction.salaryAction} placeholder={'Add Salary'} /> */}
       </Box>
    </Box>
  )
}

export default AccountLogin