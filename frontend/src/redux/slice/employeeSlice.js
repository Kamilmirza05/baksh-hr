import { createSlice } from '@reduxjs/toolkit';


const data={
  employeeData:{
    name:'',fatherName:'',dob:'',gender:'',phoneOne:'',phoneTwo:'',
    localAddress:'',nationality:'',permanentAddress:'',referenceOne:'',
    referenceOnePhone:'',referenceTwo:'',referenceTwoPhone:'',martialStatus:'',
    comment:'',designationId:'',dateofJoining:'',email:'',password:'',
    managerId:'',status:'',bloodGroup:'',emergencyContact:'',kinname:'',relation:'',
    kinPhone:'',holderName:'',accountNumber:'',bankName:'',branch:'',bankCode:'',
    salaryType:'',salary:'',employeeId:''
  }
}
const EmployeeSlice = createSlice({
  name: 'employee',
  initialState:data,
  reducers: {
    addData:(state,action)=>{
      state.employeeData={state,...action.payload};
    }
  }
});
export const employeeAction=EmployeeSlice.actions;


export default EmployeeSlice