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
    backgroundColor: color === "primary" ? "blue" : "red",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    border: "5px solid",
    background: "none",
    ...style,
  };

  return <div style={circleStyles}>{children}</div>;
};

export default Circle;
