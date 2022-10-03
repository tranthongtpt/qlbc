import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const FormLogin = () => {
    // thong bao login failed
    const MySwal = withReactContent(Swal)
    const HandleCickButton= (e)=>{
        MySwal.fire({
            title: 'Đăng nhập không thành công',
            icon: 'error',
            showConfirmButton: false,
            timer: 2000,
          })
          e.preventDefault();
    }
    //-----------
       const handleSubmit = (e) => {
            e.preventDefault();
            console.log(e.target.email.value);

            if (!e.target.email.value) {
                alert("Email is required");
              } else if (!e.target.email.value) {
                alert("Valid email is required");
              } else if (!e.target.password.value) {
                alert("Password is required");
              } else if (
                e.target.email.value === "me@example.com" &&
                e.target.password.value === "123456"
              ) {
                alert("Successfully logged in");
                e.target.email.value = "";
                e.target.password.value = "";
              } else {
                HandleCickButton()
              }
        }
    //----------- 
    // xu ly hide & show
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(e)=>{
        setPasswordInput(e.target.value);
    }
    const togglePassword =()=>{
        if(passwordType==="password")
        {
         setPasswordType("text")
         return;
        }
        setPasswordType("password")
      }
    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input className="input__field" type="text" placeholder=" " pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name='email'/>
                <span className="input__label">Email</span>
                <span>
                    <FontAwesomeIcon icon={faEnvelope} id="emaill" className='pe'/>
                </span>  
            </div>
            <div className="form-group">
                <input className="input__field"  placeholder=" "id="pwd" type={passwordType} onChange={handlePasswordChange} value={passwordInput} name='password'/>
                <span className="input__label" >Mật khẩu</span>
                <span onClick={togglePassword}>
                    {passwordType === 'password' ? <FontAwesomeIcon icon={faEye} aria-hidden="true" type="button" id="eye"/> : <FontAwesomeIcon icon={faEyeSlash} aria-hidden="true" type="button" id="eye"/>}
                </span>
            </div>
            <div className="form-group t7-space">
                <div className="checkbox">
                    <label><input type="checkbox"/>Nhớ mật khẩu</label>
                    <Link to="/entermail" className="login-forgot">
                        Quên mật khẩu
                    </Link>
                </div>	
            </div>
            <div className="form-group tc t5-space">
                <button type="submit" value="Đăng nhập" className="log-in" >Đăng nhập</button>
            </div> 
        </form>
    );
};
export default FormLogin;