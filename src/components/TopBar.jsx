import React, { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import {useNavigate} from "react-router-dom";
import "../assets/style/TopBar.css";
import SiteLogo from "../assets/images/SiteLogo.png";

const TopBar = ({ darkMode, setDarkMode }) => {

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setDarkMode(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <div
          onClick={() => {
            window.location.reload()
          }}
          className="brand"
        >
          <img src={SiteLogo} />
          GenUI
        </div>
      </div>

      <div className="topbar-right">
        <span
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className="icon icon-btn"
        >
          {darkMode ? <Sun /> : <Moon />}
        </span>
      </div>
    </div>
  );
};

export default TopBar;
