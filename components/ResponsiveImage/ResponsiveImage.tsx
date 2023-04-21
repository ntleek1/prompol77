import React from "react";
import Image, { ImageProps } from "next/image";
import Box from "@mui/material/Box";

interface ResponsiveImageProps extends ImageProps {
  fit?: "fill" | "contain" | "cover" | "none" | "scale-down";
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  height,
  width = "100%",
  src,
  alt,
  fit = "cover",
  ...props
}) => {
  return (
    <Box position="relative" height={height} width={width}>
      <Image src={src} alt={alt} fill style={{ objectFit: fit }} {...props} />
    </Box>
  );
};

export default ResponsiveImage;
