import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, makeStyles } from '@material-ui/core';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};





const useStyles=makeStyles({
  container:{
      display:'flex',
      flexDirection:'column',
      position:'relative',
      top:'1.5rem',
      paddingLeft:'0.8rem',
      width:'30vw',
      gap:'20px'
  },
  personalLabel:{
      fontFamily: 'Poppins',
      fontSize: '18px',
      fontWeight: '400',
      lineHeight: '27px',
      letterSpacing: '-0.02em',
      textAlign: 'left',
      color:'#C49150',

  },
  root: {
      '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#E1E1E1',
          },
          '&:hover fieldset': {
            borderColor: '#868B90',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#C49A50',
          },
      },
      [`& fieldset`]: {
          border: '1px solid #E1E1E1',
        borderRadius: "10px !important",
      },
      width:'100%'
  },
  flexRow:{
      display:'flex',
      width:'100%',
      flex:1,
  },
  label:{
    fontFamily: 'Poppins',
    fontSize: '10px',
    fontWeight: '600',
    lineHeight: '15px',
    letterSpacing: '-0.02em',
    textAlign: 'left',
    color:'#868B90'
},
})

function getStyles(name,personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectUi({title,data=[],handleChange,name,value,error,helperText,handleBlur,placeholder}) {
  const classes=useStyles();
  const dispatch=useDispatch();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  // const handleChange = (event,child) => {
  //   const {
  //     target: { value },
  //   } = event; 
  //     const id=child.props.id;
  //     console.log(id)


  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === 'string' ? value.split(',') : value,
  //   );
  // };
  console.log(value)
  return (
      <FormControl sx={{ width: '100%'}} >
        <Typography component='h4' className={classes.label}>
            {title}
        </Typography>
        <Select
          className={classes.root}
          displayEmpty
          name={name}
          value={value}
          error={error}
          onBlur={handleBlur}
          onChange={handleChange}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
          placeholder={placeholder}
        >
          {data.map((list,id) => (
            <MenuItem
              key={id}
              value={list.id}
              style={getStyles(list.label, personName, theme)}
            >
              {list.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}