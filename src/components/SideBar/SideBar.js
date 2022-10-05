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
//   {
//     path: "/file-manager",
//     name: "File Manager",
//     icon: <AiTwotoneFileExclamation />,
//     subRoutes: [
//       {
//         path: "/settings/profile",
//         name: "Profile ",
//         icon: <FaUser />,
//       },
//       {
//         path: "/settings/2fa",
//         name: "2FA",
//         icon: <FaLock />,
//       },
//       {
//         path: "/settings/billing",
//         name: "Billing",
//         icon: <FaMoneyBill />,
//       },
//     ],
//   },
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

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "180px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      marginLeft: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  }; 
  return (
    <>
        <motion.div
          animate={{
            width: isOpen ? "250px" : "78px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
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
                            <div className="name">Username</div>
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
                        variants={showAnimation}
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
