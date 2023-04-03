import React from "react";
import { Route, Routes } from "react-router-dom";
import EditEmployee from "./features/employee/pages/editemployee";
import Managemployee from "./features/employee/pages/managemployee";
import ViewEmployee from "./features/employee/pages/viewemployee";
import AddLeave from "./features/Leave/pages/AddLeave";
import Attendance from "./features/attendance/pages/attendance";
const Dashboard = React.lazy(() => import("./features/dashboard"));
const Employee = React.lazy(() => import("./features/employee"));
const Login = React.lazy(() => import("./features/login"));

const RouterLink = () => {
  return (
    <>
      <Routes>
        <Route
          path="/AddEmployee"
          element={
            <React.Suspense fallback={<>...</>}>
              <Employee />
            </React.Suspense>
          }
        />
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>...</>}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="/dashboard"
          element={
            <React.Suspense fallback={<>...</>}>
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route
          path="/add-leave"
          element={
            <React.Suspense fallback={<>...</>}>
              <AddLeave />
            </React.Suspense>
          }
        />
        <Route
          path="/daily-attendance"
          element={
            <React.Suspense fallback={<>...</>}>
              <Attendance />
            </React.Suspense>
          }
        />
        <Route
          path="/attendance-report"
          element={
            <React.Suspense fallback={<>...</>}>
              <Attendance />
            </React.Suspense>
          }
        />
        <Route
          path="/manage-attendance"
          element={
            <React.Suspense fallback={<>...</>}>
              <Attendance />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default RouterLink;
