import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from './Common';
 
// handle the public routes
const PublicRoutes = () => {
    let auth = {'token':false}
  return (
    !auth.token ? <Outlet/> : <Navigate to="/dashboard"/>
  )
}
 
export default PublicRoutes;