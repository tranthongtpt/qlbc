import './topbar.css';
import {BiEdit} from 'react-icons/bi'
import {FaUserEdit} from 'react-icons/fa'
import {CgUserList} from 'react-icons/cg'
import {HiOutlineClipboardList} from 'react-icons/hi'
import {TbFileSpreadsheet} from 'react-icons/tb'
function TopBar() {
    return ( 
        <div className="top-bars">
            <div className="content-header">
                <div className="box-item">
                    <a href="/" className="box-item__link">
                    <BiEdit/>
                        <p>Đăng ký làm việc</p>
                        <span className="notification-badge">5</span>
                    </a>
                    <div className="box-item__border">
                    </div>
                </div>
                <div className="box-item">
                    <a href="/" className="box-item__link">
                    <FaUserEdit/>
                        <p>Đăng ký tài khoản user</p>
                    </a>
                </div>
                <div className="box-item">
                    <a href="/" className="box-item__link">
                    <CgUserList/>
                        <p>Quản lý người dùng</p>
                    </a>
                </div>
                <div className="box-item">
                    <a href="/" className="box-item__link">
                    <TbFileSpreadsheet/>
                        <p>Xem văn bản</p>
                        <span className="notification-badge">5</span>
                    </a>
                </div>
                <div className="box-item">
                    <a href="/" className="box-item__link">
                    <HiOutlineClipboardList/>
                        <p>Danh sách đơn vị báo chí</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TopBar;