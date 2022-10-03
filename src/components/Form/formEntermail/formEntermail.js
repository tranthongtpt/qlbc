
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faEye} from '@fortawesome/free-solid-svg-icons'; 

const formEntermail = () => {
    return(
        <form>
            <div className="form-group t5-space">
                <input className="input__field" type="text" placeholder=" "  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  />
                <span className="input__label">Email</span>
                <span>
                    <FontAwesomeIcon icon={faEnvelope} id="emaill" className='pe'/>
                </span>
            </div>
            <div className="form-group tc t14-space">
                <button type="submit" value="Đăng nhập" className="log-in">Nhập email</button>
            </div>
        </form>
    );
};
export default formEntermail;