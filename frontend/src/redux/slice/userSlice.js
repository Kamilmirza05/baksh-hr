import { createSlice } from '@reduxjs/toolkit';


const data={

    email:'',password:''
}
const UserSlice = createSlice({
  name: 'user',
  initialState:data,
  reducers: {
    emailAction:(state,action)=>{
      state.email=action.payload;
    },
    passwordAction:(state,action)=>{
        state.password=action.payload;
    }
  }
});
export const userActions=UserSlice.actions;


export default UserSlice;