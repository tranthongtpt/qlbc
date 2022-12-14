import {FaEnvelope,FaCode} from 'react-icons/fa'

const formEntercode = () => {
    return(
        <form>
            <div className="form-group">
                <input className="input__field" type="text" placeholder=" "  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  />
                <span className="input__label">Email</span>
                <span>
                    <FaEnvelope id="emaill" className='pe'/>
                </span>
            </div>
            <div className="form-group">
                <input className="input__field ls-10" type="text" placeholder=" "id="pwd" pattern=".{6}"/>
                <span className="input__label" >Mã code</span>
                <span>
                    <FaCode aria-hidden="true" type="button" id="code"/>
                </span>
            </div>
            <div className="form-group tc t5-space">
                <button type="submit" value="Đăng nhập" className="log-in">Nhập code</button>
            </div>
        </form>
    );
};
export default formEntercode;