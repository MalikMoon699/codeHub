import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import "../assets/style/CodeReview.css";
import CodeRightPanel from "../components/CodeRightPanel";
import CodeLeftPanel from "../components/CodeLeftPanel";

const CodeRev = () => {
  const { darkMode } = useOutletContext();
  const [theme, setTheme] = useState("vs");
  const [response, setResponse] = useState("");
  

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const codeTheme = rootStyles.getPropertyValue("--codeColor").trim();
    setTheme(codeTheme);
  }, [darkMode]);

  return (
    <div className="main-content-landingpage">
      {response ? (
        <CodeRightPanel response={response} setResponse={setResponse} />
      ) : (
        <CodeLeftPanel
          theme={theme}
          response={response}
          setResponse={setResponse}
        />
      )}
    </div>
  );
};

export default CodeRev;
