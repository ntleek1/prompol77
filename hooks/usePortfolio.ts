import { Meta } from "@/next-seo.config";
import Routes from "@/routes";
import portfolioPhotosData from "../data/portfolio/photos.json";
import portfolioTextData from "../data/portfolio/text.json";

interface usePortfolioProps {
  limit?: number;
}

function usePortfolio({ limit }: usePortfolioProps = {}) {
  const photoData = portfolioPhotosData.slice(0, limit);
  const textData = portfolioTextData;

  return {
    ...Meta[Routes.Portfolio],
    photoData,
    textData,
  };
}

export default usePortfolio;
