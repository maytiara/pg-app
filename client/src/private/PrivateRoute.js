import React from 'react'
import { Navigate, Route } from 'react-router-dom';

function PrivateRoute () {
  
  return localStorage.getItem("token") ? (
    <Route />
  ) : (
    <Navigate to='/'/>
  );
}


export default PrivateRoute