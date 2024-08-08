import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>

    <div className="header_container">
      <div className="logo_log">
        <div className="logo_box">
          <img src="../src/assets/star-wars.svg" alt="Star Wars logo" />
        </div>
        <div className="log_sign">
          <div>LOGIN IN</div>
          <div>SIGN UP</div>
        </div>
      </div>
      <div className="main_menu">
        <Link to={"/"}><button className="Starship">HOME</button> </Link>
        <Link to={"/Starships "}><button className="Starship">STARSHIPS</button></Link>
      </div>
    </div>
    

    <Outlet />
    
    </>
  );
};

export default Layout ;
