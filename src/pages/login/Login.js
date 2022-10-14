import Illustration from "../../assets/images/Illustration.png"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import React,{ useState } from 'react';
import Button from '@material-ui/core/Button';
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios';
import { setUserSession } from "../../Utils/Common";

    export default function Login() {
        const [inputs, setInputs] = useState({});
        const MySwal = withReactContent(Swal)
        const navigate = useNavigate();
        
        const [showPassword, setShowPassword] = useState(false);
        const handleClickShowPassword = () => setShowPassword(!showPassword);
        const handleMouseDownPassword = () => setShowPassword(!showPassword);

        const handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            setInputs(values => ({...values, [name]: value}))
        }

        const handleSubmit = (e) => {
            e.preventDefault();
        
            const data = JSON.stringify({
            "usersName": inputs.usersName,
            "password": inputs.password
            });

            const config = {
            method: 'post',
            url: 'https://fakestoreapi.com/users',
            headers: { 
                'Content-Type': 'application/json',
            },
            data : data
            };

            axios(config)
            .then(response => {
                if(response.data.success === true || 'accessToken' in response) {
                    MySwal.fire({
                        title: <strong>Chúc mừng</strong>,
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      }).then((value) =>{
                        localStorage.setItem('token', JSON.stringify(response.data.result.token));
                        navigate('/dashboard');
                      })
                    } else{
                        MySwal.fire({
                            title: <strong>Đăng nhập thất bại</strong>,
                            icon: 'error',
                            title: 'Đăng nhập thất bại',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        }
        return (
            <section>
                <div className="imgBx">
                    <img src={Illustration}/>
                </div>

                <div className="container">
                    <div className="box-container">
                        <div className="title">
                            <h1>ứng dụng quản lý báo chí</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                name="usersName"
                                label="Email Address"
                                value={inputs.name}
                                onChange={handleChange}
                                /> 
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
                                type={showPassword ? "text" : "password"}
                                value={inputs.value}
                                onChange={handleChange}
                                InputProps={{ // <-- This is where the toggle button is added.
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <IconButton
                                          aria-label="toggle password visibility"
                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}
                                        >
                                          {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                      </InputAdornment>
                                    )
                                  }}
                                />
                            </div>
                            <div className="form-group">
                                <div className="checkbox">
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
                                Đăng nhập
                            </Button>
                            </div> 
                        </form>
                    </div>
                </div>
            </section>
        )      
    }

