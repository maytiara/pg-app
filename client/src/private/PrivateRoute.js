import React from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoute ({ Component }) {
  
  const auth = false;
  return auth ? <Component /> : <Navigate to="/" />;
}


export default PrivateRoute