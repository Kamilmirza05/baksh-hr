
import axios from 'axios'
import React from 'react'
import { useCookies } from 'react-cookie';
import {employeeAction} from '../slice/employeeSlice';
const {publicApi,adminApi}=require('../../axios/axiosData')
const {departmentsAction,banksAction}=employeeAction;

const EmployeeThunk = (token) => {
    console.log(token)
  return async(dispatch)=>{
    const fetchDepartment=async ()=>{
        let respone=await  axios.get(adminApi+"/department",{
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        await dispatch(departmentsAction(respone.data.departments))
       
    }
    const fetchBanks= async ()=>{
        let response=await  axios.get(publicApi+"/banks",{
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        await console.log(response?.data?.banks)
        await dispatch(banksAction(response.data.banks))
    }
    
        fetchDepartment();
        fetchBanks();
    }

   
   
}

export default EmployeeThunk