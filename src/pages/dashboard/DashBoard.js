import "./dashboard.css"
import 'boxicons'
import LogoUser from "../../assets/images/background_user.png"

function DashBoard() {
    return ( 
        <div className="container">
            <div className="header">
                <div className="navbar">
                    <box-icon name='menu'></box-icon>
                <div className="navbar-nav">

                    <div className="nav-item">
                        <a className="nav-link" href="#">
                            <box-icon name='bell'></box-icon>
                            <span className="badge"><p>12</p></span>
                        </a>
                    </div>
                    
                    <div className="nav-item">
                        <a className="nav-link">
                            <box-icon name='log-out'></box-icon>
                        </a>
                    </div>
                </div>
                </div>
            </div>

            <div className="sidebar">
            <div className="logo_content">
            <div className="logo">
            <box-icon name='netlify' type='logo' ></box-icon>
                <span>quản lý báo chí</span>
            </div>
            </div>
            <div className="content">
            <div className="user">
                <div className="user_details">
                    <img src={LogoUser} className="img-circle" alt="User Image" id="logo-user"/>
                    <div className="name_job">
                        <div className="name">Username</div>
                        <div className="job">chuc vu</div>
                    </div>
                </div>
            </div>
            </div>
            <ul className="nav_list">
            <li>
                <a href="#">
                <box-icon name='grid-alt'></box-icon>
                    <span className="links_name">Bảng điều khiển</span>
                </a>
                <span className="tooltip">Bảng điều khiển</span>
            </li>
            <li>
                <a href="#">
                <box-icon name='edit' ></box-icon>
                    <span className="links_name">abcxz</span>
                </a>
                <span className="tooltip">abcxz</span>
            </li>
            <li>
                <a href="#">
                <box-icon name='message-dots'></box-icon>
                    <span className="links_name">Messages</span>
                </a>
                <span className="tooltip">Messages</span>
            </li>
            <li>
                <a href="#">
                <box-icon name='calendar' ></box-icon>
                    <span className="links_name">Lịch làm việc</span>
                </a>
                <span className="tooltip">Lịch làm việc</span>
            </li>
            <li>
                <a href="#">
                <box-icon name='bar-chart-square' ></box-icon>
                    <span className="links_name"> Thống kê</span>
                </a>
                <span className="tooltip"> Thống kê</span>
            </li>

            <div className="line"></div>

            <li>
                <a href="#">
                <box-icon name='user-circle' ></box-icon>
                    <span className="links_name">Người dùng</span>
                </a>
                <span className="tooltip">Người dùng</span>
            </li>
            <li>
                <a href="#">
                <box-icon name='cog' ></box-icon>
                    <span className="links_name">Cài đặt</span>
                </a>
                <span className="tooltip">Cài đặt</span>
            </li>
            </ul>
            </div>

            <div className="home_content">
            <div className="top-bars">
            <div className="content-header">
                <div className="box-item">
                <a href="/" className="box-item__link jc-se">
                <box-icon name='user-detail' type='solid' ></box-icon>
                    <p>Đăng ký người dùng</p>
                    <span className="notification-badge">5</span>
                </a>
                <div className="box-item__border">

                </div>
                </div>
                <div className="box-item">
                <a href="/" className="box-item__link">
                <box-icon name='calendar-edit'></box-icon>
                    <p>Đăng ký yêu cầu thông tin</p>
                </a>
                </div>
                <div className="box-item">
                <a href="/" className="box-item__link">
                <box-icon name='file-find' ></box-icon>
                    <p>Xem văn bản</p>
                </a>
                </div>
                <div className="box-item">
                <a href="/" className="box-item__link">
                <box-icon name='food-menu' ></box-icon>
                    <p>Danh sách đơn vị báo chí</p>
                </a>
                </div>
            </div>
            </div>

            </div>
        </div>
     );
}

export default DashBoard;