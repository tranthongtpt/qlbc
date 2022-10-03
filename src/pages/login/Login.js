import Illustration from "../../assets/images/Illustration.png"
import Form from "../../components/Form/formLogin/formLogin.js";

const Login = () =>{

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
                <Form/>
                </div>
            </div>
        </section>
    );        
};
export default Login;