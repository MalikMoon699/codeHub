import React, { useState, useEffect } from "react";
import "../assets/style/RightPanel.css";
import {
  Copy,
  Download,
  RotateCw,
  SquareArrowOutUpRight,
  X,
} from "lucide-react";
import { useOutletContext } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { toast } from 'sonner';

const RightPanel = ({ response, setResponse, usedFramework }) => {
  const { darkMode } = useOutletContext();
  const [theme, setTheme] = useState("vs");
  const [tab, setTab] = useState(1);
  const [isPreviewTab, setIsPreviewTab] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const codeTheme = rootStyles.getPropertyValue("--codeColor").trim();
    setTheme(codeTheme);
  }, [darkMode]);

  return (
    <div className="rightpanel-code-container">
      <div className="rightpanel-code-header">
        {usedFramework && usedFramework === "HTML" && (
          <div className="rightpanel-code-header-tabs">
            <div
              onClick={() => {
                setTab(1);
              }}
              className="rightpanel-code-header-tab"
            >
              Code
            </div>
            <div
              onClick={() => {
                setTab(2);
              }}
              className="rightpanel-code-header-tab"
            >
              Preview
            </div>
            <span
              className={`rightpanel-code-header-tab-active active-${tab}`}
            ></span>
          </div>
        )}
        <div className="rightpanel-code-header-inner-container">
          <h1>{tab === 1 ? "Code Editor" : "Site Preview"}</h1>
          <div className="rightpanel-code-header-action-btns">
            {tab === 1 ? (
              <>
                <button
                  className="icon icon-btn"
                  onClick={() => {
                    if (!response) return;
                    navigator.clipboard
                      .writeText(response)
                      .then(() => toast.success("Code copied to clipboard!"))
                      .catch((err) => console.error("Failed to copy: ", err));
                  }}
                >
                  <Copy />
                </button>

                <button
                  className="icon icon-btn"
                  onClick={() => {
                    if (!response) return;
                    const blob = new Blob([response], { type: "text/plain" });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = "component.html";
                    link.click();
                    URL.revokeObjectURL(link.href);
                  }}
                >
                  <Download />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIframeKey((prev) => prev + 1)}
                  className="icon icon-btn"
                >
                  <RotateCw />
                </button>
                <button
                  onClick={() => {
                    setIsPreviewTab(true);
                  }}
                  className="icon icon-btn"
                >
                  <SquareArrowOutUpRight />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {tab === 1 ? (
        <Editor
          height="-webkit-fill-available"
          theme={theme}
          options={{
            padding: {
              top: 10,
              bottom: 10,
            },
          }}
          defaultValue={response}
          defaultLanguage="javascript"
          value={response}
          onChange={(val) => setResponse(val)}
        />
      ) : (
        <iframe
          key={iframeKey}
          className="rightpanel-preview-container"
          srcDoc={response}
        />
      )}
      {isPreviewTab && (
        <div className="full-preview-container">
          <div className="topbar-container">
            <div className="topbar-left">
              <div className="brand">CodeHub</div>
            </div>

            <div className="topbar-right">
              <span
                onClick={() => setIframeKey((prev) => prev + 1)}
                className="icon icon-btn"
              >
                <RotateCw />
              </span>
              <span
                onClick={() => {
                  setIsPreviewTab(false);
                }}
                className="icon icon-btn"
              >
                <X />
              </span>
            </div>
          </div>
          <iframe
            key={iframeKey}
            className="rightpanel-preview-container"
            srcDoc={response}
          />
        </div>
      )}
    </div>
  );
};

export default RightPanel;
