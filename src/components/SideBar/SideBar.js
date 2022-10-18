import { NavLink } from "react-router-dom";
import {BiGridAlt,BiEdit,BiMessageRoundedDots,BiBarChartSquare,BiUserCircle} from "react-icons/bi"
import { BiCog } from "react-icons/bi";
import { TiNews } from "react-icons/ti";
import { useState } from "react";
import { AnimatePresence, calcLength, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import LogoUser from "../../assets/images/background_user.png"
import './sidebar.css'
import '../GlobalStyles/GlobalStyles'
import { useEffect } from "react";
import axios from "axios";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <BiGridAlt />,
  },
  {
    path: "/dangky",
    name: "Đăng ký",
    icon: <BiEdit />,
  },
  {
    path: "/messages",
    name: "Tin nhắn",
    icon: <BiMessageRoundedDots />,
  },
  {
    path: "/thongke",
    name: "Thống kê",
    icon: <BiBarChartSquare />,
  },
    {
    path: "/x",
    name: "xx",
    icon: <BiUserCircle />,
  },
  {
    path: "/user",
    name: "Người dùng",
    icon: <BiUserCircle />,
  },
  {
    path: "/settings",
    name: "Cài đặt",
    icon: <BiCog />,
  },
  
];

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen); 

  return (
    <>
        <motion.div
          animate={{
            width: "250px",
          }}
          className={`sidebar`}
        >
            <div className="logo_content">
                <div className="logo">
                <TiNews/>
                    <span>quản lý báo chí</span>
                </div>
            </div>
            <div className="content">
                <div className="user">
                    <div className="user_details">
                        <img src={LogoUser} className="img-circle" alt="User Image" id="logo-user"/>
                        <div className="name_job">
                            <div className="name">xxx</div>
                            <div className="job">chuc vu</div>
                        </div>
                    </div>
                </div>
            </div>
          <div className="routes">
            {routes.map((route, index) => {
                if(index == 4) {
                    return (
                        <div className="line"></div>
                    )
                }
                return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial="hidden"
                        animate="show" 
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </div>
        </motion.div>
    </>
  );
};

export default SideBar;
