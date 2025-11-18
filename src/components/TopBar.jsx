import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  Moon,
  Sun,
  // Menu,
  // Monitor,
  // Smartphone,
  // Tablet,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { IMAGES } from "../services/Constants";
import "../assets/style/TopBar.css";
import ComponentSelector from "./ComponentSelector";

const TopBar = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isStarted, setIsStarted] = useState(false);
  // const [deviceMode, setDeviceMode] = useState(false);
  // const [devicetype, setDeviceType] = useState("pc");

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

  // useEffect(() => {
  //   const updateDeviceType = () => {
  //     const width = window.innerWidth;
  //     if (width >= 1024) {
  //       setDeviceType("pc");
  //     } else if (width >= 768) {
  //       setDeviceType("tablet");
  //     } else {
  //       setDeviceType("mobile");
  //     }
  //   };

  //   updateDeviceType();
  //   window.addEventListener("resize", updateDeviceType);

  //   return () => window.removeEventListener("resize", updateDeviceType);
  // }, []);

  // useEffect(() => {
  //   const prefersDark = window.matchMedia(
  //     "(prefers-color-scheme: dark)"
  //   ).matches;
  //   setDeviceMode(prefersDark);

  //   const listener = (e) => {
  //     setDeviceMode(e.matches);
  //   };

  //   const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //   mediaQuery.addEventListener("change", listener);

  //   return () => {
  //     mediaQuery.removeEventListener("change", listener);
  //   };
  // }, []);

  // console.log("devicetype--->", devicetype);
  // console.log("deviceMode--->", deviceMode);

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
            if (isLandingPage) {
              navigate("/");
              window.location.reload();
              window.history.scrollRestoration = "manual";
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 300);
            } else {
              window.location.reload();
            }
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
            <a className="topbar-right-nav-item" href="#workflow">
              Workflow
            </a>
            <a className="topbar-right-nav-item" href="#why">
              Why choose
            </a>
            <a className="topbar-right-nav-item" href="#tools">
              Tools
            </a>
            <a className="topbar-right-nav-item" href="#testimonials">
              testimonials
            </a>
            <a className="topbar-right-nav-item" href="#faq">
              faq
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
        {/* <span onClick={() => setDarkMode(deviceMode)} className="icon icon-btn">
          {devicetype === "pc" ? (
            <Monitor />
          ) : devicetype === "tablet" ? (
            <Tablet />
          ) : (
            <Smartphone />
          )}
        </span> */}

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
