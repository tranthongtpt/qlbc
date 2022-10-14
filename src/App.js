import { BrowserRouter,Switch,Redirect,Routes,Route,} from "react-router-dom";

import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import EnterCode from "./pages/entercode/EnterCode";
import EnterMail from "./pages/entermail/EnterMail";
import Login from "./pages/login/Login"
import DashBoard from "./pages/dashboard/DashBoard";
import React,{ useEffect,useState } from "react";
import PublicRoutes from "./Utils/PublicRoute";
import PrivateRouter from "./Utils/PrivateRoute";

function getToken() {
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  // const token=getToken();

  // if(!token) {
  //   return <Login/>
  // }

  return (
  <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes/>}>
          <Route path="/login" element={<Login/>}/>
        </Route>
        <Route element={<PrivateRouter/>}>
          <Route path="/dashboard" element={<DashBoard/>}/>
        </Route>
        {/* <Route path="/entermail" element={<EnterMail/>}/>
        <Route path="/entercode" element={<EnterCode/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/> */}
      </Routes>
  </BrowserRouter>
  );
}
// http://10.220.5.65/cvssgit/QLBC_WEB_Client.git
export default App;
