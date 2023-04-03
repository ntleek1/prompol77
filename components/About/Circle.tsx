import React from "react";

interface CircleProps {
  color: "primary" | "error";
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Circle: React.FC<CircleProps> = ({ color, children, style }) => {
  const circleStyles = {
    width: "80px",
    height: "80px",
    borderRadius: "100%",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    border: "6px solid",
    fontSize: "40px",
    borderColor: color === "primary" ? "#F87171" : "#365FA1",
    color: color === "primary" ? "#F87171" : "#365FA1",
    ...style,
  };

  return <div style={circleStyles}>{children}</div>;
};

export default Circle;
