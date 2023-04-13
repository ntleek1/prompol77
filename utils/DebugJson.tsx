import React from "react";
import { createStyles } from "@mui/material/styles";

const styles = createStyles({
  pre: {
    backgroundColor: "#f5f5f5",
    borderRadius: 4,
    padding: "1rem",
    overflowX: "auto",
  },
  code: {
    fontFamily: "'Source Code Pro', monospace",
  },
});

const DebugJson = ({ data }) => {
  const { pre, code } = styles;

  return (
    <pre style={pre}>
      <code style={code}>{JSON.stringify(data, null, 2)}</code>
    </pre>
  );
};

export default DebugJson;
