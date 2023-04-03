
import axios from 'axios'
import React from 'react'
import { useCookies } from 'react-cookie';
import {employeeAction} from '../slice/employeeSlice';
const {publicApi,adminApi}=require('../../axios/axiosData')
const {departmentsAction,banksAction,salaryTypesAction,managersAction}=employeeAction;

const GetEmployeeThunk = (token,employeeId,setdata,data) => {
  return async(dispatch)=>{

    }

   
   
}

export default GetEmployeeThunk