import { Meta } from "@/next-seo.config";
import Routes from "@/routes";
import servicesData from "../data/services.json";

interface useServiceProps {
  limit?: number;
}

function useService({ limit }: useServiceProps = {}) {
  const data = servicesData.slice(0, limit);

  return {
    ...Meta[Routes.Service],
    data,
  };
}

export { servicesData };

export default useService;
