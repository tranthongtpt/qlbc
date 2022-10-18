import "./dashboard.css"
import  {CgMenuLeft} from 'react-icons/cg'
import  {BiBell,BiLogIn,BiCog} from 'react-icons/bi'
import {BiGridAlt,BiEdit,BiMessageRoundedDots,BiBarChartSquare,BiUserCircle} from "react-icons/bi"
import { TiNews } from "react-icons/ti";

import { useEffect, useState } from "react";
import { AnimatePresence, motion ,calcLength} from "framer-motion"; 
import PageWrapper from "../../components/PageWrapper/PageWrapper"
import { useNavigate,NavLink } from "react-router-dom";
import LogoUser from "../../assets/images/background_user.png"
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

function DashBoard() {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(() => {
        const token =localStorage.getItem('token');
        
        const config = {
        method: 'get',
        url: 'http://10.220.5.65:8090/api/v1/user/init-info',
        headers: { 
            'Authorization': 'Bearer '+token, 
            'Content-Type': 'application/json', 
        },
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data.result));
        })
        .catch(function (error) {
        console.log(error);
        });

        
    },[])

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login")
    }
    return ( 
        <div className="container">

            <motion.div     
                className="header"
            >
                <div className="navbar">
                    {/* onClick={toggle} click*/}
                        <CgMenuLeft/>
                        <div className="navbar-nav">
                            <div className="nav-item">
                                <a className="nav-link" href="#">
                                    <BiBell/>
                                    <span className="badge"><p>12</p></span>
                                </a>
                            </div>
                            <div className="nav-item">
                                <a className="nav-link" onClick={handleLogout}>
                                    <BiLogIn/>
                                </a>
                            </div>
                        </div>
                    </div>
            </motion.div> 

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
                            <div className="name">{result.givenName}</div>
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

           <PageWrapper/>
        </div>
     );
}

export default DashBoard;
