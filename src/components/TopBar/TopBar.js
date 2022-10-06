import './topbar.css';

function TopBar() {
    return ( 
        <div className="top-bars">
            <div className="content-header">
                <div className="box-item">
                    <a href="/" className="box-item__link">
                    <box-icon name='user-detail' type='solid' ></box-icon>
                        <p>Đăng ký làm việc</p>
                        <span className="notification-badge">5</span>
                    </a>
                    <div className="box-item__border">
                    </div>
                </div>
                <div className="box-item">
                    <a href="/" className="box-item__link">
                    <box-icon name='calendar-edit'></box-icon>
                        <p>Đăng ký tài khoản user</p>
                    </a>
                </div>
                <div className="box-item">
                    <a href="/" className="box-item__link">
                    <box-icon name='calendar-edit'></box-icon>
                        <p>Quản lý người dùng</p>
                    </a>
                </div>
                <div className="box-item">
                    <a href="/" className="box-item__link">
                    <box-icon name='file-find' ></box-icon>
                        <p>Xem văn bản</p>
                        <span className="notification-badge">5</span>
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
    );
}

export default TopBar;