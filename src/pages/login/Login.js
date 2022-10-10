import Illustration from "../../assets/images/Illustration.png"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import React,{ useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
    // async function loginUser(credentials) {
    //     return fetch('http://10.220.5.13:8090/api/v1/admin/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(credentials)
    //     })
    //     .then(data => data.json())
    // }
   
    export default function Signin() {
        const [inputs, setInputs] = useState({});
        const MySwal = withReactContent(Swal)
        const navigate = useNavigate();

        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}))
        }

        const handleSubmit = async (e) => {
            e.preventDefault();

            var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Cookie", "connect.sid=s%3AqI78HSBB0xRpi-ZhkjMg7KHRhzstVlHn.O9%2BHYPN1NetFY18FF%2BGDkkYTyVKJwOq9cF6AeeI6LjY");

                var raw = JSON.stringify({
                "email": inputs.email,
                "password": inputs.password
                });

                var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
                };

                fetch("http://10.220.5.13:8090/api/v1/user/login", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    if(result.success === true) {
                        MySwal.fire({
                            title: <strong>Chúc mừng</strong>,
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                          }).then((value) =>{
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
                })
                .catch(error => console.log('error', error));
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
                                value={inputs.username}
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
                                value={inputs.username}
                                onChange={handleChange} 
                                />
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
                                Đăng nhập
                            </Button>
                            </div> 
                        </form>
                    </div>
                </div>
            </section>
        )      
    }