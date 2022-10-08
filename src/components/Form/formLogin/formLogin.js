import {FaEnvelope,FaEye,FaEyeSlash} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import React,{ useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const FormLogin = () => {
    // thong bao login failed
    // const MySwal = withReactContent(Swal)
    // const HandleCickButton= (e)=>{
    //     MySwal.fire({
    //         title: 'Đăng nhập không thành công',
    //         icon: 'error',
    //         showConfirmButton: false,
    //         timer: 2000,
    //       })
    //       e.preventDefault();
    // }
    //-----------

    const loginUser=(credentials) =>{
        return fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
          })
            .then(data => data.json())
         }
    

    //----------- 
    // xu ly hide & show
    
        // const [passwordType, setPasswordType] = useState("");
        // const [passwordInput, setPasswordInput] = useState("");
        // const handlePasswordChange =(e)=>{
        //     setPasswordInput(e.target.value);
        // }
        // const togglePassword =()=>{
        //     if(passwordType==="password")
        //     {
        //      setPassword("text")
        //      return;
        //     }
        //     setPasswordType("password")
        // }
            const [username, setUserName] = useState();
            const [password, setPassword] = useState();
            const handleSubmit = async e => {
                e.preventDefault();
                const response = await loginUser({
                    username,
                    password
                });
            if ('token' in response) {
              Swal("Success", response.message, "success", {
                buttons: false,
                timer: 2000,
              })
              .then((value) => {
                localStorage.setItem('token', response['token']);
                localStorage.setItem('user', JSON.stringify(response['user']));
                window.location.href = "/dashboard";
              });
            } else {
              Swal("Failed", response.message, "error");
            }
    }
    
    return(
        <form onSubmit={{handleSubmit}}>
            <div className="form-group">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              onChange={e => setUserName(e.target.value)}
            />
                <span className="input__label">Email</span>
                <span>
                    <FaEnvelope id="emaill" className='pe'/>
                </span>  
            </div>
            <div className="form-group">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              onChange={e => setPassword(e.target.value)} 
            />
                <span className="input__label" >Mật khẩu</span>
                {/* <span onClick={togglePassword}>
                    {passwordType === 'password' ? <FaEye aria-hidden="true" type="button" id="eye"/> : <FaEyeSlash aria-hidden="true" type="button" id="eye"/>}
                </span> */}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
            </div> 
        </form>
    )
}
export default FormLogin;