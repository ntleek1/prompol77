export enum Routes {
  Home = "/",
  Service = "/promyshlennye-poly",
  Portfolio = "/vypolnennye-raboty",
  Warranty = "/garantii-kachestva",
}

export const generateHref = (url, route) => `${route}/${url}`;

export default Routes;
