import { configureStore } from '@reduxjs/toolkit';
import AppSlice from './slice/appSlice';
import EmployeeSlice from './slice/employeeSlice';
import UserSlice from './slice/userSlice';

const store = configureStore({
  reducer: {
    emp:EmployeeSlice.reducer,user:UserSlice.reducer,app:AppSlice.reducer
  }
});

export default store;