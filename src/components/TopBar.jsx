import React, { useEffect, useState } from "react";
import { ChevronLeft, Moon, Sun } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { IMAGES } from "../services/Constants";
import "../assets/style/TopBar.css";
import ComponentSelector from "./ComponentSelector";

const TopBar = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isStarted, setIsStarted] = useState(false);

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

  const isLandingPage = location.pathname === "/";

  return (
    <header className="topbar-container">
      <div className="topbar-left">
        {!isLandingPage && (
          <button
            onClick={() => navigate("/")}
            className="icon topbar-back-btn"
          >
            <ChevronLeft />
          </button>
        )}
        <div
          className="brand"
          onClick={() => {
            window.location.reload();
          }}
        >
          <img src={IMAGES.SiteLogo} />
          CodeHub
        </div>
      </div>
      <div className="topbar-right">
        {isLandingPage && (
          <>
            <a className="topbar-right-nav-item" href="#features">
              Features
            </a>
            <a className="topbar-right-nav-item" href="#tools">
              Tools
            </a>
            <a className="topbar-right-nav-item" href="#about">
              About
            </a>
          </>
        )}
        <span
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className="icon icon-btn"
        >
          {darkMode ? <Sun /> : <Moon />}
        </span>
        {isLandingPage && (
          <button
            onClick={() => {
              setIsStarted(true);
            }}
            className="topbar-nav-btn"
          >
            Get Started
          </button>
        )}
      </div>
      {isStarted && (
        <ComponentSelector
          onClose={() => {
            setIsStarted(false);
          }}
        />
      )}
    </header>
  );
};

export default TopBar;
