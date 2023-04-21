import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";

const mdxComponents = {
  Image,
  ResponsiveImage,
  Box,
  Paper,
  Typography,
  h1: (props) => <Typography variant="h1" {...props} />,
  h2: (props) => <Typography variant="h2" {...props} />,
  h3: (props) => <Typography variant="h3" {...props} />,
  h4: (props) => <Typography variant="h4" {...props} />,
  h5: (props) => <Typography variant="h5" {...props} />,
  h6: (props) => <Typography variant="h6" {...props} />,
  p: (props) => <Typography {...props} />,
  blockquote: (props) => (
    <Typography variant="body2" component="blockquote" {...props} />
  ),
  li: (props) => <Typography component="li" pb={2} {...props} />,
  hr: (props) => <Typography component="hr" mt={2} {...props} />,
};

export default mdxComponents;
