import React from "react";
import { X, Code2, Shapes } from "lucide-react";
import "../assets/style/ComponentSelector.css";
import { useNavigate } from "react-router";

const ComponentSelector = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div onClick={onClose} className="model-overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="model-content"
      >
        <div className="model-header">
          <h3 className="model-title">Select a Method</h3>

          <button onClick={onClose} className="model-close-btn icon">
            <X size={20} />
          </button>
        </div>

        <p className="model-description">
          Choose a tool below to continue. CodeHub provides powerful AI-driven
          features to improve your workflow.
        </p>

        <div className="model-content-area">
          <div
            onClick={() => {
              onClose();
              navigate("/code-reviwer");
            }}
            className="model-option"
          >
            <div className="model-option-icon icon">
              <Code2 />
            </div>
            <div className="model-option-info">
              <h4>Code Reviewer</h4>
              <p>
                Analyze your code instantly with AI-powered insights, bug
                detection and best-practice suggestions.
              </p>
            </div>
          </div>

          <div
            onClick={() => {
              onClose();
              navigate("/component-generator");
            }}
            className="model-option"
          >
            <div className="model-option-icon icon">
              <Shapes />
            </div>
            <div className="model-option-info">
              <h4>Component Generator</h4>
              <p>
                Create beautiful, production-ready UI components in seconds
                using smart generation tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentSelector;
