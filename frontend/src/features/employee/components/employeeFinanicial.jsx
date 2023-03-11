import { Box} from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import InputText from '../ui/input'
import InputNumber from '../../../components/ui/inputNumber';
import SelectUi from '../../../components/ui/select';


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

const EmployeeFinancial = ({parentClass}) => {
  const classes=useStyles()
  return (
    <Box component='div' className={classes.container}>
       <Box component='h1' className={classes.title}>Financial Details</Box>
       <Box component='div' className={classes.fields}>
           {/* <InputText placeholder={'Add Account Holder Name'} title={'Account Holder Name'}/> */} 
            <SelectUi    title={'Select Salary Type'} data={BankName} classes={classes}/>
            <InputNumber label={'Salary'} classes={classes} placeholder={'Add Salary'} />
       </Box>
    </Box>
  )
}

export default EmployeeFinancial