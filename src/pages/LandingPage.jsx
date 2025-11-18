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
      <section id="workflow" className="landing-page-workflow-section">
        <h2 className="landing-page-section-title">How It Works</h2>

        <div className="landing-page-workflow-steps">
          <div className="workflow-step">
            <div className="step-number">1</div>
            <h4>Choose Your Tool</h4>
            <p>
              Select from Code Review, Component Generator, or Image Generator.
            </p>
          </div>
          <div className="workflow-step">
            <div className="step-number">2</div>
            <h4>Describe Your Needs</h4>
            <p>Provide code, UI details, or image prompts.</p>
          </div>
          <div className="workflow-step">
            <div className="step-number">3</div>
            <h4>Get Instant Output</h4>
            <p>Receive optimized, clean, and reusable results instantly.</p>
          </div>
        </div>
      </section>
      <section id="why" className="landing-page-why-section">
        <h2 className="landing-page-section-title">Why Choose CodeHub?</h2>

        <div className="landing-page-why-grid">
          <div className="landing-page-why-card">
            <h3>Boost Productivity</h3>
            <p>
              Save hours every week with AI-assisted automation for common dev
              tasks.
            </p>
          </div>
          <div className="landing-page-why-card">
            <h3>Clean, Reusable Output</h3>
            <p>Get production-ready UI components and images instantly.</p>
          </div>
          <div className="landing-page-why-card">
            <h3>Developer Friendly</h3>
            <p>
              Built with modern UX to make your workflow smooth and intuitive.
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
      <section id="testimonials" className="landing-page-testimonial-section">
        <h2 className="landing-page-section-title">What Developers Say</h2>

        <div className="landing-page-testimonial-grid">
          <div className="testimonial-card">
            <p>
              “CodeHub saved me countless hours—its code review is insanely
              accurate.”
            </p>
            <h4>— Ali R., Frontend Engineer</h4>
          </div>
          <div className="testimonial-card">
            <p>“Component Generator is a life saver for rapid prototyping!”</p>
            <h4>— Sana M., UI/UX Designer</h4>
          </div>
          <div className="testimonial-card">
            <p>“The Image Generator blows my mind. Clean output every time.”</p>
            <h4>— Zain Tech, Software Builder</h4>
          </div>
        </div>
      </section>
      <section id="faq" className="landing-page-faq-section">
        <h2 className="landing-page-section-title">
          Frequently Asked Questions
        </h2>

        <div className="faq-item">
          <h4>Is CodeHub free to use?</h4>
          <p>Yes! You can use the basic tools without any cost.</p>
        </div>

        <div className="faq-item">
          <h4>Can I export generated components?</h4>
          <p>Absolutely — all outputs are copy-ready and framework-friendly.</p>
        </div>

        <div className="faq-item">
          <h4>Does CodeHub support dark mode?</h4>
          <p>Yes, the entire app adapts to your theme preferences.</p>
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
