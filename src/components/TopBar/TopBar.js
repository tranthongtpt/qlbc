import './topbar.css';
import {BiEdit} from 'react-icons/bi'
import {FaUserEdit} from 'react-icons/fa'
import {CgUserList} from 'react-icons/cg'
import {HiOutlineClipboardList} from 'react-icons/hi'
import {TbFileSpreadsheet} from 'react-icons/tb'
import { Link } from 'react-router-dom';

function TopBar() {
    return ( 
        <div className="top-bars">
            <div className="content-header">
                <div className="box-item">
                    <Link href="/" className="box-item__link">
                    <BiEdit/>
                        <p>Đăng ký làm việc</p>
                        <span className="notification-badge">5</span>
                    </Link>
                    <div className="box-item__border">
                    </div>
                </div>
                <div className="box-item">
                    <Link href="/detailuser" className="box-item__link">
                    <FaUserEdit/>
                        <p>Đăng ký tài khoản user</p>
                    </Link>
                </div>
                <div className="box-item">
                    <Link href="/" className="box-item__link">
                    <CgUserList/>
                        <p>Quản lý người dùng</p>
                    </Link>    
                </div>
                <div className="box-item">
                    <Link href="/" className="box-item__link">
                    <TbFileSpreadsheet/>
                        <p>Xem văn bản</p>
                        <span className="notification-badge">5</span>
                    </Link>
                </div>
                <div className="box-item">
                    <Link href="/" className="box-item__link">
                    <HiOutlineClipboardList/>
                        <p>Danh sách đơn vị báo chí</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TopBar;