import logo from './logo.svg';
import './App.css';
import Login from './features/login/components/login';
import Employee from './features/employee/components/employee';
import { Box} from '@mui/material';
import { makeStyles } from '@material-ui/core';


const useStyles=makeStyles({
  mainContainer:{
    display:'flex',
    flexDirection:'column'
  }
})
function App() {
  const classes=useStyles();
  return (
    <div className='w-full h-full flex'>
      {/* <Login/>  */}
        <Employee/>

    </div>
  );
}

export default App;
