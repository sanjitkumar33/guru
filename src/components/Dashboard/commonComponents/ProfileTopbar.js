import React, {useState} from "react";
import { Link , useLocation  } from "react-router-dom";

const ProfileTopbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="col-12 mt-3">
      <Link
        to="/userprofile"
        className={`btn btn1 virtual-btn ${activeLink === "/userprofile" ? "active" : ""}`}
        onClick={() => handleLinkClick("/userprofile")}
      >
        User Profile
      </Link>
      <Link to="/account" className={`btn btn1 virtual-btn ${activeLink === "/account" ? "active" : ""}`}
        onClick={() => handleLinkClick("/account")}>
        Account
      </Link>
      <Link to="/api" type="button" className={`btn btn1 virtual-btn ${activeLink === "/api" ? "active" : ""}`}
        onClick={() => handleLinkClick("/api")}>
        API
      </Link>
      <Link to="/webhook" type="button" className={`btn btn1 virtual-btn ${activeLink === "/webhook" ? "active" : ""}`}
        onClick={() => handleLinkClick("/webhook")}>
        Webhooks
      </Link>
      <Link to="/SystemInfo" type="button" className={`btn btn1 virtual-btn ${activeLink === "/SystemInfo" ? "active" : ""}`}
        onClick={() => handleLinkClick("/SystemInfo")}>
        SystemInfo
      </Link>
      
      
    </div>
  );
};

export default ProfileTopbar;
