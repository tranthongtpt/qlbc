import { BrowserRouter,Switch,Redirect,Routes,Route,} from "react-router-dom";

import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import EnterCode from "./pages/entercode/EnterCode";
import EnterMail from "./pages/entermail/EnterMail";
import Login from "./pages/login/Login"
import DashBoard from "./pages/dashboard/DashBoard";
import React,{ useEffect,useState } from "react";
import PublicRoutes from "./Utils/PublicRoute";
import PrivateRouter from "./Utils/PrivateRoute";
import { getToken, removeUserSession, setUserSession } from './Utils/Common';

function App() {
  const [authLoading, setAuthLoading] = useState(true);
  useEffect(() => {
    const token = getToken();
    if (token) {
      setUserSession(token);
      setAuthLoading(false);
    } else {
      removeUserSession();
      setAuthLoading(false);
    } 
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
 
  return (
  <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes/>}>
          <Route path="/login" element={<Login/>}/>
          <Route path="/entermail" element={<EnterMail/>}/>
          <Route path="/entercode" element={<EnterCode/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        </Route>
        <Route element={<PrivateRouter/>}>
          <Route path="/dashboard" element={<DashBoard/>}/>
        </Route>
        
      </Routes>
  </BrowserRouter>
  );
}
// http://10.220.5.65/cvssgit/QLBC_WEB_Client.git
export default App;
