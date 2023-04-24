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
    isButton: false,
  },
  {
    anchor: "/#portfolio",
    label: "Наши работы",
    isVisible: true,
    isButton: false,
  },
  {
    anchor: "/#about",
    label: "О компании",
    isVisible: true,
    isButton: false,
  },
  {
    anchor: "/#contacts",
    label: "Контакты",
    isVisible: true,
    isButton: false,
  },
  {
    anchor: "/#service",
    label: "Выбрать вид полов",
    isVisible: true,
    isButton: true,
  },
  {
    anchor: "/#portfolio",
    label: "Портфолио",
    isVisible: true,
    isButton: true,
  },
];
