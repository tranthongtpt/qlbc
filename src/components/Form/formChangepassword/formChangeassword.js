import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faEye} from '@fortawesome/free-solid-svg-icons'; 

const formChangepassword = () => {
    return(
        <form>
            <div className="form-group">
                <input className="input__field" type="text" placeholder=" "  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  />
                <span className="input__label">Email</span>
                <span>
                <FontAwesomeIcon icon={faEnvelope} id="emaill" className='pe'/>
                </span>
            </div>
            <div className="form-group">
                <input className="input__field" type="password" placeholder=" "id="pwd" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/>
                <span className="input__label" >Nhập mật khẩu cũ</span>
                <span>
                    <FontAwesomeIcon icon={faEye} aria-hidden="true" type="button" id="eye"/>
                </span>          
            </div>
            <div className="form-group">
                <input className="input__field" type="password" placeholder=" "id="pwd" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/>
                <span className="input__label" >Nhập mật khẩu mới</span>
                <span>
                    <FontAwesomeIcon icon={faEye} aria-hidden="true" type="button" id="eye"/>
                </span>       
            </div>
            <div className="form-group">
                <input className="input__field" type="password" placeholder=" "id="pwd" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/>
                <span className="input__label" >Xác nhận mật khẩu mới</span>
                <span>
                    <FontAwesomeIcon icon={faEye} aria-hidden="true" type="button" id="eye"/>
                </span>         
            </div>
            <div className="form-group tc">
                <button type="submit" value="Đăng nhập" className="log-in">Đổi mật khẩu</button>
            </div> 
        </form>
    );
};
export default formChangepassword;