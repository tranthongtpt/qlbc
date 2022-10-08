import { BrowserRouter,Routes,Route } from "react-router-dom";

import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import EnterCode from "./pages/entercode/EnterCode";
import EnterMail from "./pages/entermail/EnterMail";
import Login from "./pages/login/Login"
import DashBoard from "./pages/dashboard/DashBoard";
import FormLogin from "./components/Form/formLogin/formLogin";

function App() {
  const token = localStorage.getItem('token');

  if(!token) {
    return <FormLogin />
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/entermail" element={<EnterMail/>}/>
        <Route path="/entercode" element={<EnterCode/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
      </Routes>
    </BrowserRouter>
  );
}
// http://10.220.5.65/cvssgit/QLBC_WEB_Client.git
export default App;
