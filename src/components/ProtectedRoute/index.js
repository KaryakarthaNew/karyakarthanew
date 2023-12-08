import Cookies from "js-cookie";
// import { useNavigate, Navigate } from "react-router-dom";
// import { BrowserRouter as Route, Routes } from "react-router-dom";
// import Login from "../Login";

// const ProtectedRoute = (props) => {
//   const navigate = useNavigate();
//   const jwtToken = Cookies.get("jwtToken");
//   if (jwtToken === undefined) {
//     return <Navigate to={<Login />} />;
//   }
//   return <Route {...props} />;
// };

// export default ProtectedRoute;

import React from "react";
import { Route, Navigate } from "react-router-dom";
// import {isauth}  from 'auth'

function ProtectedRoute({ element, path }) {
  const jwtToken = Cookies.get("jwtToken");
  const ele = jwtToken === undefined ? element : <Navigate to="/login" />;
  return <Route path={path} element={ele} />;
}

export default ProtectedRoute;
