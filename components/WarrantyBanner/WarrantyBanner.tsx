import React from "react";
import Link from "next/link";
import { Meta } from "@/next-seo.config";
import Routes from "@/routes";
import { Box, Container, Typography, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import useWarrantyBannerStyles from "./styles";

interface WarrantyBannerProps {
  showButtons?: boolean;
}

const WarrantyBanner: React.FC<WarrantyBannerProps> = ({
  showButtons = true,
}) => {
  const { sxWarrantyBanner } = useWarrantyBannerStyles();

  return (
    <Box id="BannerBox" component="section" sx={sxWarrantyBanner}>
      <Container sx={{ height: "100%" }}>
        <Box className="warrantyBanner-Container">
          <Box>
            <Typography
              variant="h2"
              component="p"
              className="warrantyBanner-Header"
            >
              {Meta[Routes.Warranty].header}
            </Typography>
          </Box>
          {showButtons ? (
            <Box className="warrantyBanner-Bottom">
              <Button variant="contained" startIcon={<EmailIcon />}>
                Оставить заявку
              </Button>
              <Link
                href={Routes.Warranty}
                passHref
                style={{ color: "inherit" }}
              >
                <Button variant="outlined" color="inherit">
                  Подробнее
                </Button>
              </Link>
            </Box>
          ) : null}
        </Box>
      </Container>
    </Box>
  );
};
export default WarrantyBanner;
