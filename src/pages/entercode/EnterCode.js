import Illustration from "../../assets/images/Illustration.png"
import FormEnterMail from "../../components/Form/formEntercode/formEntercode.js";

const EnterCode = () =>{

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
export default EnterCode;