import "./dashboard.css"
import 'boxicons'
import LogoUser from "../../assets/images/background_user.png"
import SideBar from "../../components/SideBar/SideBar";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion ,calcLength} from "framer-motion"; 

function DashBoard() {
    const [isOpen, setIsOpen] = useState(true);

  const showHeaderAnimation = {
    hidden: {
    width: calcLength("100%" - "78px"),
      left:"78px",
      transition: {
        duration: 0.2,
      },
    },
    show: {
        width:calcLength("100%" - "250px"),
        left:"250px",
        transition: {
        duration: 0.1,
      },
    },
  };
    return ( 
        <div className="container">

            <motion.div     
                variants={showHeaderAnimation}
                animate={isOpen ? "show" : "hidden"}
                className="header"
            >
                <div className="navbar">
                    {/* onClick={toggle} click*/}
                        <box-icon name='menu' ></box-icon>
                        <div className="navbar-nav">
                            <div className="nav-item">
                                <a className="nav-link" href="#">
                                    <box-icon name='bell' animation='tada-hover'></box-icon>
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
            </motion.div> 

            <SideBar/>

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
            </div>
        </div>
     );
}

export default DashBoard;