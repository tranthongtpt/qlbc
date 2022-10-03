import Illustration from "../../assets/images/Illustration.png"
import FormChangepassword from "../../components/Form/formChangepassword/formChangeassword.js";

const ForgotPassword = () =>{

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
                    <FormChangepassword/>
                </div>
            </div>
        </section>
    );        
};
export default ForgotPassword;