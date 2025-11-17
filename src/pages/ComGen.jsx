import React,{ useState } from "react";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import StaticRightPanel from "../components/StaticRightPanel";

const ComGen = () => {
  const [response, setResponse] = useState("");
  const [usedFramework, setUsedFramework] = useState("HTML");

  return (
    <div className="main-content-landingpage">
      <LeftPanel
        response={response}
        setResponse={setResponse}
        setUsedFramework={setUsedFramework}
      />
      {response ? (
        <RightPanel
          response={response}
          setResponse={setResponse}
          usedFramework={usedFramework}
        />
      ) : (
        <StaticRightPanel response={response} />
      )}
    </div>
  );
};

export default ComGen;
