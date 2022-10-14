import {FaEnvelope} from 'react-icons/fa'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const formEntermail = () => {
    return(
        <form>
            <div className="form-group t5-space">
                    <TextField variant="outlined" label="Email" type="Họ và tên" className="input__field"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                {/* <input className="input__field" type="text" placeholder=" "  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  />
                <span className="input__label">Email</span> */}
                <span>
                    <FaEnvelope id="emaill" className='pe'/>
                </span>
            </div>
            <div className="form-group tc t14-space">
                <Button variant="contained" type="submit" value="Đăng nhập" className="log-in">Nhập email</Button>
                {/* <button type="submit" value="Đăng nhập" className="log-in">Nhập email</button> */}
            </div>
        </form>
    );
};
export default formEntermail;