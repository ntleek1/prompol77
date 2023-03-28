import portfolioData from "../data/portfolio.json";

function usePortfolio() {
  const title = "Выполненные работы";
  const subtitle =
    "Мы рады представить вам галерею фотографий наших завершенных проектов. Устройство промышленных полов - это наше любимое дело, и мы подходим к нему с максимальной ответственностью. Мы надеемся, что фотографии наших работ помогут вам убедиться в высоком качестве наших услуг и присоединиться к числу наших довольных клиентов.";

  return {
    title,
    subtitle,
    data: portfolioData,
  };
}

export default usePortfolio;
