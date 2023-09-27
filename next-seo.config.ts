/**
 * See SEO options here:
 * https://github.com/garmeeh/next-seo#nextseo-options
 */

import { DefaultSeoProps } from "next-seo";
import Routes from "./routes";

export const CompanyName = "ПолПромРФ";
export const DefaultPageTitle = "Промышленные полы, промышленные наливные полы от компании полпром";

const Config: DefaultSeoProps = {
  titleTemplate: `%s - ${CompanyName}`,
  defaultTitle: DefaultPageTitle,
  canonical: "https://floors.vercel.app/",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://floors.vercel.app/",
    siteName: CompanyName,
  },
};

export default Config;

export const Meta = {
  [Routes.Home]: {
    title: DefaultPageTitle,
    header: "Производство промышленных полов",
    description:
      "Мы обладаем значительным опытом работы в данной сфере и точно знаем, чего ждет заказчик. Наши клиенты – это предприятия и общественные организации, которые ценят свое время и деньги.",
  },
  [Routes.Service]: {
    title: "Промышленные полы",
    header: "Промышленные полы",
    description:
      "Наша компания специализируется на производстве высококачественных промышленных полов, мы используем только качественные материалы от проверенных производителей. Предлагаем ознакомиться со списком видов полов и их назначением.",
  },
  [Routes.Portfolio]: {
    title: "Выполненные работы",
    header: "Выполненные работы",
    description:
      "Мы рады представить Вам галерею выполненных работ и список объектов, где они были выполнены. Проведение работ по изготовлению промышленных полов – наша работа, нам есть чем гордиться по итогам выполненных договоров. Мы надеемся, что даже часть от списка работ поможет Вам понять какого уровня наша фирма на рынке промышленных полов. Мы надеемся что Вы станете новой строкой в этом списке! ",
  },
  [Routes.Warranty]: {
    title: "Гарантия качества и результата",
    header: "2 года гарантии качества и результата",
    description:
      "Мы предоставляем реальную гарантию качества и результата на долгие годы!",
  },
};
