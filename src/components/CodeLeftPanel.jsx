import { Editor } from "@monaco-editor/react";
import React, { useState, useRef, useEffect } from "react";
import Loader from "./Loader";
import { API_URL } from "../services/Helper";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { reviewPrompt } from "../services/Constants";
import { toast } from "sonner";

const CodeLeftPanel = ({ theme, setResponse }) => {
  const [loading, setLoading] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [message, setMessage] = useState("");

  const buttonRef = useRef(null);

  const handleSend = async () => {
    if (!message) return toast.error("Please fill Code fields");

    setLoading(true);

    try {
      const payload = {
        contents: [
          {
            parts: [
              {
                text: reviewPrompt(message),
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
      setResponse(aiText);
    } catch (error) {
      console.error("Error sending AI request:", error);
      toast.error("Something went wrong while generating the component.");
    } finally {
      setLoading(false);
    }
  };

  const handleScrollButton = () => {
    if (!buttonRef.current) return;

    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      buttonRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const checkScroll = () => {
    if (!buttonRef.current) return;
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const isButtonVisible =
      buttonRect.top >= 0 && buttonRect.bottom <= window.innerHeight;
    setIsAtBottom(isButtonVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    checkScroll();

    return () => {
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div className="code-review-left-container">
      <div
        style={{
          border: "1px solid var(--textColor)",
          overflow: "hidden",
          height: "-webkit-fill-available",
          borderRadius: "8px",
        }}
      >
        <Editor
          height="-webkit-fill-available"
          theme={theme}
          defaultLanguage="javascript"
          value={message}
          onChange={(val) => setMessage(val)}
          options={{
            padding: { top: 10, bottom: 10 },
          }}
        />
      </div>
      <button
        ref={buttonRef}
        disabled={loading}
        onClick={handleSend}
        className="lp-generate-btn"
        style={{ marginBottom: "15px" }}
      >
        {loading ? (
          <Loader
            size="13"
            color="white"
            style={{ width: "100%", height: "15px" }}
          />
        ) : (
          <>
            <span className="icon">
              <Sparkles size={16} />
            </span>{" "}
            Start Review
          </>
        )}
      </button>
      <button className="go-to-bottom" onClick={handleScrollButton}>
        {isAtBottom ? <ChevronUp /> : <ChevronDown />}
      </button>
    </div>
  );
};

export default CodeLeftPanel;
