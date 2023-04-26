import React from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import useClients from "@/hooks/useClients";

const Clients: React.FC = () => {
  const isMobile = useIsMobile();

  const { data } = useClients();

  return (
    <>
      <Box className="portfolio__ClientsHeader">
        <Typography variant="h3">Клиенты которые нам доверяют</Typography>
        <Typography variant="body2" component="p">
          Мы ценим наши отношения с клиентами и всегда стараемся оправдать их
          доверие.
        </Typography>
      </Box>
      <Box className="portfolio-Container">
        <Box className="portfolio-ClientBox">
          <Grid
            container
            spacing={2}
            alignContent="center"
            justifyContent="center"
          >
            {data.map(({ src, alt }, index) => (
              <Grid xs={4} lg={2} gap={1} key={index}>
                <Box
                  width="100%"
                  height={isMobile ? 72 : 120}
                  position="relative"
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography component="p" align="justify">
          Промышленные полы в современном мире являются одними из самых важных
          элементов любого производственного и коммерческого помещения. Они
          обеспечивают не только эстетическую функцию, но и являются основой для
          безопасной работы и эффективного использования пространства
        </Typography>
        <Typography component="p" align="justify">
          В настоящее время устройство промышленных полов достигло невероятных
          высот благодаря инновационным технологиям и материалам, которые
          обеспечивают высокую прочность, износостойкость, устойчивость к
          химическим веществам и температурным перепадам, а также
          антистатические и антибактериальные свойства.
        </Typography>
        <Typography component="p" align="justify">
          Мы внимательно следим за всеми новинками и тенденциями в отрасли,
          постоянно совершенствуем свои знания и умения, чтобы предложить нашим
          клиентам самые передовые решения для устройства промышленных полов. Мы
          дорожим качеством и надежностью нашей работы, и всегда гарантируем
          безупречный результат. Благодаря нашим услугам вы получите
          промышленный пол, который прослужит долгие годы и прекрасно справится
          со всеми задачами, которые перед ним стоят.
        </Typography>
      </Box>
    </>
  );
};

export default Clients;
