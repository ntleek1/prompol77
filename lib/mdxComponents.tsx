import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";

const mdxComponents = {
  Image,
  ResponsiveImage,
  Box,
  Typography,
  h1: (props) => <Typography variant="h1" {...props} />,
  h2: (props) => <Typography variant="h2" {...props} />,
  h3: (props) => <Typography variant="h3" {...props} />,
  h4: (props) => <Typography variant="h4" {...props} />,
  h5: (props) => <Typography variant="h5" {...props} />,
  h6: (props) => <Typography variant="h6" {...props} />,
  p: (props) => <Typography variant="body2" {...props} />,
  li: (props) => <Typography component="li" pb={2} {...props} />,
};

export default mdxComponents;
