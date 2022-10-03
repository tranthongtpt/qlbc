import Illustration from "../../assets/images/Illustration.png"
import FormEnterMail from "../../components/Form/formEntermail/formEntermail.js";

const EnterMail = () =>{

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
                    <FormEnterMail/>
                </div>
            </div>
        </section>
    );        
};
export default EnterMail;