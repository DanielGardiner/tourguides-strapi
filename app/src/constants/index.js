import cmsComponents from "./cmsComponents";
import endpoints from "./endpoints";

const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;
const cmsToken = process.env.CMS_TOKEN;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const isDevelopment = process.env.NEXT_PUBLIC_ENV;

const userRoles = {
  PUBLIC: "Public",
  AUTHENTICATED: "Authenticated",
};

export {
  endpoints,
  cmsToken,
  cmsUrl,
  isDevelopment,
  apiUrl,
  cmsComponents,
  userRoles,
};
