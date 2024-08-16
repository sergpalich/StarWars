import { Link, Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../src/components/Context/AuthContext"


const Layout = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <>
      <div className="header_container">
        <div className="logo_log">
          <div className="logo_box">
            <img src="../src/assets/star-wars.svg" alt="Star Wars logo" />
          </div>
          <div className="log_sign">
            {currentUser ? (
              <div className="user_info">
                <span>{currentUser.email}</span>
                <button onClick={logout} className="logout_button">
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to={"/loginPage"}>
                  <div className="login_reg">LOGIN IN</div>
                </Link>
                <Link to={"/registerPage"}>
                  <div className="login_reg">SIGN UP</div>
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="main_menu">
          <Link to={"/"}>
            <button className="Starship">HOME</button>
          </Link>
          <Link to={"/Starships"}>
            <button className="Starship">STARSHIPS</button>
          </Link>
        </div>
      </div>

    <Outlet />
    
    </>
  );
};

export default Layout ;
