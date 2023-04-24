export enum Routes {
  Home = "/",
  Service = "/promyshlennye-poly",
  Portfolio = "/vypolnennye-raboty",
  Warranty = "/garantii-kachestva",
}

export const generateHref = (url, route) => `${route}/${url}`;

export default Routes;

export const MenuNav = [
  {
    anchor: "/#service",
    label: "Виды полов",
    isVisible: true,
  },
  {
    anchor: "/#portfolio",
    label: "Наши работы",
    isVisible: true,
  },
  {
    anchor: "/#about",
    label: "О компании",
    isVisible: true,
  },
  {
    anchor: "/#contacts",
    label: "Контакты",
    isVisible: true,
  },
];
