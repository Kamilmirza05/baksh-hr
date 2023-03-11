import { createSlice } from '@reduxjs/toolkit';


const data={

  error:false,flag:false,loading:false,msg:''
}
const AppSlice = createSlice({
  name: 'AppSlice',
  initialState:data,
  reducers: {
    setError:(state,action)=>{
      state.error=action.payload;
    },
    setFlag:(state,action)=>{
        state.flag=action.payload;
    },
    setMsg:(state,action)=>{
      state.msg=action.payload;
    }
  }
});
export const {setFlag,setError,setMsg}=AppSlice.actions;


export default AppSlice;