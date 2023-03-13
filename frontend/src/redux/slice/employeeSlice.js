import { createSlice } from '@reduxjs/toolkit';


const data={
  name:'',fatherName:'',dob:'',gender:'',contactOne:'',contactTwo:'',
  localAddress:'',nationality:'',permanentAddress:'',referenceOne:'',
  referenceOneContact:'',referenceTwo:'',referenceTwoPhone:'',martialStatus:'',
  comment:'',designationId:'',dateofJoining:"",email:'',password:'',
  managerId:'',status:'',bloodGroup:'',emergencyContact:'',kinname:'',relation:'',
  kinPhone:'',accountholderName:'',accountNumber:'',bankId:'',branch:'',bankCode:'',
  salaryType:'',salary:'',employeeId:'',profilePic:null,departmentId:0,relationContact:'',
  managers:[],departments:[],designations:[],banks:[]
}
const EmployeeSlice = createSlice({
  name: 'employee',
  initialState:data,
  reducers: {
    profileAction:(state,action)=>{
      state.profilePic=action.payload
    },
    addNameAction:(state,action)=>{
      state.name=action.payload;
    },
    fatherNameAction:(state,action)=>{
      state.fatherName=action.payload;
    },
    dobAction:(state,action)=>{
      state.dob=action.payload;
    },
    genderAction:(state,action)=>{
      state.gender=action.payload;
    },
    contactOneAction:(state,action)=>{
      state.contactOne=action.payload;
    },
    contactTwoAction:(state,action)=>{
      state.contactTwo=action.payload;
    },
    localAddressAction:(state,action)=>{
      state.localAddress=action.payload
    },
    nationalityAction:(state,action)=>{
      state.nationality=action.payload;
    },
    permanentAddressAction:(state,action)=>{
      state.permanentAddress=action.payload;
    },
    nationalityAction:(state,action)=>{
      state.nationality=action.payload
    },
    martialStatusAction:(state,action)=>{
      state.martialStatus=action.payload;
    },
    accountNumberAction:(state,action)=>{
      state.accountNumber=action.payload;
    },
    accountHolderAction:(state,action)=>{
      state.accountholderName=action.payload;
    },
    BankAction:(state,action)=>{
      state.bankId=action.payload;
    },
    BranchAction:(state,action)=>{
      state.branch=action.payload;
    },
    employeeIdAction:(state,action)=>{
      state.employeeId=action.payload;
    },
    departmentAction:(state,action)=>{
      state.departmentId=action.payload;
    },
    designationAction:(state,action)=>{
      state.designationId=action.payload;
    },
    dateofJoiningAction:(state,action)=>{
      console.log(action.payload)
      state.dateofJoining=action.payload;
    },
    statusAction:(state,action)=>{
      state.status=action.payload;
    },
    managerAction:(state,action)=>{
      state.managerId=action.payload;
    },
    salaryTypeAction:(state,action)=>{
      state.salaryType=action.payload;
    },
    salaryAction:(state,action)=>{
      state.salary=action.payload;
    },
    kinNameAction:(state,action)=>{
      state.kinname=action.payload;
    },
    bloodGroupAction:(state,action)=>{
      state.bloodGroup=action.payload;
    },
    emergencyContactAction:(state,action)=>{
      state.emergencyContact=action.payload;
    },
    relationAction:(state,action)=>{
      state.relation=action.payload;
    },
    relationContactNoAction:(state,action)=>{
      state.relationContact=action.payload;
    },
    departmentsAction:(state,action)=>{
      state.departments=action.payload;
    },
    managersAction:(state,action)=>{
      state.managers=action.payload;
    },
    deisgnationsAction:(state,action)=>{
      state.designations=action.payload
    },
    banksAction:(state,action)=>{
      state.banks=action.payload;
    }
  }
});
export const employeeAction=EmployeeSlice.actions;


export default EmployeeSlice