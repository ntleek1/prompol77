import servicesData from "../data/services.json";

function useService() {
  const title = "Промышленные полы";
  const subtitle =
    "Наша компания специализируется на производстве высококачественных промышленных полов, мы используем только качественные материалы от проверенных производителей. Предлагаем ознакомиться со списком видов полов и их назначения.";

  return {
    title,
    subtitle,
    data: servicesData,
  };
}

export { servicesData };

export default useService;
