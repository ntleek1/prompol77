import { Meta } from "@/next-seo.config";
import Routes from "@/routes";
import portfolioData from "../data/portfolio.json";
import clientsData from "../data/clients.json";

interface usePortfolioProps {
  limit?: number;
}

function usePortfolio({ limit }: usePortfolioProps = {}) {
  const data = portfolioData.slice(0, limit);

  return {
    ...Meta[Routes.Portfolio],
    data,
    clientsData,
  };
}

export default usePortfolio;
