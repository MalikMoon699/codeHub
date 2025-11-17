import React from "react";
import { FormatResponse } from "../components/FormatResponse";

const CodeRightPanel = ({ response, setResponse }) => {

  return (
    <div className="ai-review-container">
      <FormatResponse text={response} />
    </div>
  );
};

export default CodeRightPanel;
