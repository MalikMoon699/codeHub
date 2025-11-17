import React from 'react'
import { CodeXml } from "lucide-react";

const StaticRightPanel = ({ response }) => {
  return (
    <div className={`rightpanel-container ${response ? "" : "display-none"}`}>
      <div className="rp-center">
        <div className="rp-icon icon">
          <CodeXml />
        </div>
        <p className="rp-text">Your component & code will appear here.</p>
      </div>
    </div>
  );
};

export default StaticRightPanel
