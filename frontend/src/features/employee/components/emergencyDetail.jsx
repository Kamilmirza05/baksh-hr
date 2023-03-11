import { Box, Button} from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import InputText from '../ui/input'
import InputNumber from '../../../components/ui/inputNumber';
import SelectUi from '../../../components/ui/select';
import ButtonUi from '../../../components/ui/button';


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
        top:'1rem',
        
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
    },
    flexRow:{
        display:'flex',
        width:'100%',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:20
    },
    subBtn:{
        backgroundColor:'#C49150 !important',
        color:'white !important',
        width:'13.3rem',
        height:'46px !important',
        borderRadius:'10px !important'
    },
    flexEnd:{
        display:'flex',
        width:'100%',
        flex:1,
        justifyContent:'end',
        alignItems:'end',
        gap:20,
        marginTop:'2rem'
    }
})

const EmergencyDetail = ({}) => {
  const classes=useStyles()
  return (
    <Box component='div' className={classes.container}>
       <Box component='h1' className={classes.title}>Emergency Details</Box>
       <Box component='div' className={classes.fields}>
           <Box className={classes.flexRow}>
                <InputText placeholder={'Add Name of Kin'} title={'Blood Group'}/>
                <InputNumber label={'Add Phone Number'} classes={classes} placeholder={'Emergency Contact'} />
           </Box>
           <InputText placeholder={'Add Name of Kin'} title={'Next of Kin'}/>
           <Box className={classes.flexRow}>
                <InputText placeholder={'Relation'} title={'Add Relation '}/>
                <InputNumber label={'Phone'} classes={classes} placeholder={'Add Phone Number'} />
           </Box>
           <Box component='div' className={classes.flexEnd}>
             <Button>Save as draft</Button>
             <Button className={classes.subBtn}>Submit</Button>
           </Box>
       </Box>
    </Box>
  )
}

export default EmergencyDetail