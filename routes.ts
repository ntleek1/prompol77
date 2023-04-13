export enum Routes {
  Home = "/",
  Services = "/promyshlennye-poly",
  Portfolio = "/portfolio",
  Warranty = "/warranty",
  Contacts = "/contacts",
}

export const generateHref = (url, route) => `${route}/${url}`;

export default Routes;
