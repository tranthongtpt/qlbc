import Illustration from "../../assets/images/Illustration.png"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import React,{ useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios';

    export default function Login() {
        const [inputs, setInputs] = useState({});
        const MySwal = withReactContent(Swal)
        const navigate = useNavigate();
        
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(false);

        const handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            setInputs(values => ({...values, [name]: value}))
        }

        const handleSubmit = (e) => {
            e.preventDefault();
        
            const data = JSON.stringify({
            "email": inputs.email,
            "password": inputs.password
            });

            const config = {
            method: 'post',
            url: 'http://10.220.5.65:8090/api/v1/province/login',
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
                      }).then(() =>{
                        localStorage.setItem('token',response.data.result.token);
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
                                name="email"
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
                                type="password"
                                value={inputs.value}
                                onChange={handleChange} 
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

