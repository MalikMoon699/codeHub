import { Image, ImageDown, Sparkles } from "lucide-react";
import React, { useState } from "react";
import "../assets/style/ImageGenerator.css";
import Loader from "../components/Loader";
import { ImagePromptGenerator, IMAGES } from "../services/Constants";
import { toast } from "sonner";
import { API_URL, IMAGE_API_KEY, IMAGE_URL } from "../services/Helper";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [promptGenrateFor, setPromptGenrateFor] = useState("");
  const [promptLoading, setPromptLoading] = useState(false);
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const handlesendPromptRequest = async () => {
    if (!promptGenrateFor) return toast.error("Please Enter a Base Idea.");

    setPromptLoading(true);

    try {
      const payload = {
        contents: [
          {
            parts: [
              {
                text: ImagePromptGenerator(promptGenrateFor),
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
      setPromptGenrateFor("");
      setPrompts(aiText);
    } catch (error) {
      console.error("Error sending AI request:", error);
      toast.error("Something went wrong while generating the component.");
    } finally {
      setPromptLoading(false);
    }
  };

  const handlesend = async () => {
    if (!prompt) return toast.error("Please enter a prompt first.");
    setImage(IMAGES.GenPlaceHolder);
    setLoading(true);
    try {
      const form = new FormData();
      form.append("prompt", prompt);

      const response = await fetch(IMAGE_URL, {
        method: "POST",
        headers: {
          "x-api-key": IMAGE_API_KEY,
        },
        body: form,
      });

      if (!response.ok) {
        throw new Error("Image generation failed.");
      }

      const buffer = await response.arrayBuffer();

      const base64Image = btoa(
        new Uint8Array(buffer).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );

      const imgSrc = `data:image/png;base64,${base64Image}`;

      setImage(imgSrc);
    } catch (error) {
      console.error(error);
      toast.error("Error generating image.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadImage = () => {
    if (!image) return toast.error("No image to download.");

    const link = document.createElement("a");
    link.href = image;
    link.download = `ai-image-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="main-content-landingpage" style={{ alignItems: "start" }}>
      <div className="leftpanel-container">
        <h2 className="lp-title">AI Image Generator</h2>
        <p className="lp-subtitle">
          Describe your image and let AI bring your imagination to life.
        </p>
        <label className="lp-label">Enter a Base Idea</label>
        <input
          type="text"
          value={promptGenrateFor}
          style={{ cursor: "text" }}
          placeholder="Type a simple idea, e.g., 'sunset over mountains'"
          onChange={(e) => {
            setPromptGenrateFor(e.target.value);
          }}
          className="lp-input"
        />
        {prompts && prompts.length > 0 ? (
          <div className="lp-prompts-preview">
            <h3 className="lp-prompts-title">Generated Prompts</h3>
            <div className="lp-prompts-list">
              {prompts
                .split("\n")
                .filter((p) => p.trim() !== "")
                .map((p, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setPrompt(p.replace(/^\d+\.\s*/, ""));
                      toast.success("Prompt added successfully");
                    }}
                    className="lp-prompt-card"
                  >
                    <span className="lp-prompt-number">{index + 1}.</span>{" "}
                    <span className="lp-prompt-text">
                      {p.replace(/^\d+\.\s*/, "")}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <button
            disabled={promptLoading}
            onClick={handlesendPromptRequest}
            className="lp-generate-btn"
          >
            {promptLoading ? (
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
        )}
        <label className="lp-label">Generate Prompts</label>
        <textarea
          className="lp-textarea"
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          placeholder="Describe your prompt in detail and let AI will generate Image for you."
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
      <div className="rightpanel-container" style={{ overflow: "hidden" }}>
        {image ? (
          <div
            className="genrated-Image-container"
            style={loading ? { height: "100%", width: "100%" } : {}}
          >
            {loading && (
              <div>
                <Loader color="white" />
              </div>
            )}
            <img src={image} style={{ objectFit: loading ? "cover" : "" }} />
            {!loading && image && (
              <span onClick={handleDownloadImage} className="icon">
                <ImageDown />
              </span>
            )}
          </div>
        ) : (
          <div className="rp-center">
            <div className="rp-icon icon">
              <Image />
            </div>
            <p className="rp-text">Your Image will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
