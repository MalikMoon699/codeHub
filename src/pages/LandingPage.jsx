import React, { useState } from "react";
import "../assets/style/LandingPage.css";
import { Image, Puzzle, Zap } from "lucide-react";
import ComponentSelector from "../components/ComponentSelector";
import LandingHero from "../components/LandingHero";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const [isStarted, setIsStarted] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="landing-page-container">
      <LandingHero
        ButtonClick={() => {
          setIsStarted(true);
        }}
      />
      <section id="features" className="landing-page-features-section">
        <h2 className="landing-page-section-title">Core Features</h2>
        <div className="landing-page-features-grid">
          <div
            className="landing-page-feature-card"
            onClick={() => {
              navigate("/code-reviwer");
            }}
          >
            <div className="landing-page-feature-icon">
              <Zap />
            </div>
            <h3 className="landing-page-feature-title">AI Code Review</h3>
            <p className="landing-page-feature-text">
              Get instant, detailed insights to improve your code quality.
            </p>
          </div>

          <div
            className="landing-page-feature-card"
            onClick={() => {
              navigate("/component-generator");
            }}
          >
            <div className="landing-page-feature-icon">
              <Puzzle />
            </div>
            <h3 className="landing-page-feature-title">Component Generator</h3>
            <p className="landing-page-feature-text">
              Generate clean and reusable UI components effortlessly.
            </p>
          </div>

          <div
            className="landing-page-feature-card"
            onClick={() => {
              navigate("/image-generator");
            }}
          >
            <div className="landing-page-feature-icon">
              <Image />
            </div>
            <h3 className="landing-page-feature-title">Image Generator</h3>
            <p className="landing-page-feature-text">
              Generate clean and reusable Image effortlessly.
            </p>
          </div>
        </div>
      </section>
      <section id="tools" className="landing-page-tools-section">
        <h2 className="landing-page-section-title">Developer Tools</h2>

        <div className="landing-page-tools-grid">
          <div className="landing-page-tool-card">
            <h3 className="landing-page-tool-title">Code Reviewer</h3>
            <p className="landing-page-tool-text">
              Analyze your code in real-time with smart AI-powered suggestions.
            </p>
          </div>

          <div className="landing-page-tool-card">
            <h3 className="landing-page-tool-title">Component Generator</h3>
            <p className="landing-page-tool-text">
              Generate clean, reusable UI components instantly.
            </p>
          </div>

          <div className="landing-page-tool-card">
            <h3 className="landing-page-tool-title">Image Generator</h3>
            <p className="landing-page-tool-text">
              Generate clean, reusable Image instantly.
            </p>
          </div>
        </div>
      </section>
      <section id="about" className="landing-page-about-section">
        <div className="landing-page-about-content">
          <h2 className="landing-page-about-title">About CodeHub</h2>
          <p className="landing-page-about-text">
            CodeHub is an all-in-one platform built for developers to speed up
            workflows, improve code quality, and generate production-ready UI
            components & Images effortlessly. Our mission is to empower creators
            with tools that save time and boost creativity.
          </p>
        </div>
      </section>
      {isStarted && (
        <ComponentSelector
          onClose={() => {
            setIsStarted(false);
          }}
        />
      )}
      <footer className="landing-page-footer">
        <p className="landing-page-footer-text">
          © {new Date().getFullYear()} CodeHub — All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
