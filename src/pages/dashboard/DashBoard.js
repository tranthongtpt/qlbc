import "./dashboard.css"
import 'boxicons'
import SideBar from "../../components/SideBar/SideBar";
import { useState } from "react";
import { AnimatePresence, motion ,calcLength} from "framer-motion"; 
import PageWrapper from "../../components/PageWrapper/PageWrapper"
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

           <PageWrapper/>
        </div>
     );
}

export default DashBoard;