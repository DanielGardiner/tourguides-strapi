import strapiText from "../../../node_modules/@strapi/admin/admin/src/translations/en.json";
import nextLogo from "./extensions/next-logo.svg";
import nextFavicon from "./extensions/next-favicon.ico";

function getNewText() {
  const newText = {};
  Object.entries(strapiText).forEach(([key, value]) => {
    newText[key] = value.replace("Strapi", "CMS");
  });
  return newText;
}

const newText = getNewText();

const config = {
  translations: {
    en: newText,
  },
  auth: {
    logo: nextLogo,
  },
  head: {
    favicon: nextFavicon,
    title: "CMS",
  },
  menu: {
    logo: nextLogo,
  },
  tutorials: false,
  notifications: { releases: false },
};

const bootstrap = (app) => {
  if (window.location.pathname === "/admin/auth/login") {
    document.title = "CMS";
  }
};

export default {
  config,
  bootstrap,
};
