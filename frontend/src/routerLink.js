import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
const Dashboard=React.lazy(() => import('./features/dashboard'))
const Employee= React.lazy(() => import('./features/employee'));
const Attendance= React.lazy(()=> import('./features/attendance/pages/attendance'))
const Login= React.lazy(() => import('./features/login'))


const RouterLink = () => {
  return (
    <>
     <Routes>
          <Route path="/AddEmployee" 
              element={  
              <React.Suspense fallback={<>...</>}>
                <Employee/>
              </React.Suspense>
              } 
          />
          <Route path="/" 
              element={  
              <React.Suspense fallback={<>...</>}>
                <Login/>
              </React.Suspense>
              } 
          />
          <Route path="/dashboard" 
              element={  
              <React.Suspense fallback={<>...</>}>
                <Dashboard/>
              </React.Suspense>
              } 
          />
          <Route path="/DailyAttendance" 
              element={  
              <React.Suspense fallback={<>...</>}>
                <Attendance/>
              </React.Suspense>
              } 
          />
    </Routes>      
    </>
  );
};

export default RouterLink;