import React from "react";
import Image, { ImageProps } from "next/image";
import Box from "@mui/material/Box";

const ResponsiveImage: React.FC<ImageProps> = ({
  height,
  width = "100%",
  src,
  alt,
  ...props
}) => {
  return (
    <Box position="relative" height={height} width={width}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        {...props}
      />
    </Box>
  );
};

export default ResponsiveImage;
