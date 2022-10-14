import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from './Common';
 
// handle the public routes
const PrivateRouter = () => {
    let auth = {'token':false}
  return (
    getToken() ? <Outlet/> : <Navigate to="/login"/>
  )
}
 
export default PrivateRouter;