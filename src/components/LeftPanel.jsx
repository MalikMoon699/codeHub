import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import "../assets/style/LeftPanel.css";
import Loader from "./Loader";
import { AiPrompt, templates } from "../services/Constants";
import { toast } from "sonner";
import { API_URL } from "../services/Helper";

const LeftPanel = ({ response, setResponse, setUsedFramework }) => {
  const [loading, setLoading] = useState(false);
  const [framework, setFramework] = useState("");
  const [style, setStyle] = useState("");
  const [script, setScript] = useState("");
  const [description, setDescription] = useState("");
  
  const Validation = () => {
    if (!framework) return false;
    if (!style) return false;
    if (framework === "HTML" && !script) return false;
    if (!description) return false;
    return true;
  };

  const handlesend = async () => {
    if (!Validation()) return toast.error("Please fill all required fields");

    setLoading(true);

    try {
      const payload = {
        contents: [
          {
            parts: [
              {
                text: AiPrompt(description, framework, style, script),
              },
            ],
          },
        ],
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      const aiText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
        "AI did not return a response.";
      setUsedFramework(framework);
      setResponse(aiText);
    } catch (error) {
      console.error("Error sending AI request:", error);
      toast.error("Something went wrong while generating the component.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`leftpanel-container ${response ? "display-none" : ""}`}>
      <h2 className="lp-title">AI component generator</h2>
      <p className="lp-subtitle">
        Describe your component and let AI will code for you.
      </p>

      <label className="lp-label">Framework</label>
      <select
        value={framework}
        onChange={(e) => {
          setFramework(e.target.value);
        }}
        className="lp-select"
      >
        <option disabled value="">
          Select...
        </option>
        {templates.language.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>

      <label className="lp-label">Style</label>
      <select
        value={style}
        onChange={(e) => {
          setStyle(e.target.value);
        }}
        className="lp-select"
      >
        <option disabled value="">
          Select...
        </option>
        {templates.style.map((style) => (
          <option key={style} value={style}>
            {style}
          </option>
        ))}
      </select>
      {framework === "HTML" && (
        <>
          <label className="lp-label">Script</label>
          <select
            onChange={(e) => {
              setScript(e.target.value);
            }}
            value={script}
            className="lp-select"
          >
            <option disabled value="">
              Select...
            </option>
            {templates.script.map((script) => (
              <option key={script} value={script}>
                {script}
              </option>
            ))}
          </select>
        </>
      )}

      <label className="lp-label">Describe your component</label>
      <textarea
        className="lp-textarea"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Describe your component in detail and let AI will code for your component."
      />

      <button
        disabled={loading}
        onClick={handlesend}
        className="lp-generate-btn"
      >
        {loading ? (
          <Loader size="13" color="white" />
        ) : (
          <>
            <span className="icon">
              <Sparkles size={16} />
            </span>{" "}
            Generate
          </>
        )}
      </button>
    </div>
  );
};

export default LeftPanel;
