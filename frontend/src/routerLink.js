import React from 'react'
import { Route, Routes } from 'react-router-dom'
const Dashboard=React.lazy(() => import('./features/dashboard'))
const Employee= React.lazy(() => import('./features/employee'))
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
    </Routes>      
    </>

  )
}

export default RouterLink