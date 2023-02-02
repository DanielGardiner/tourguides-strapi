const apiUrl = process.env.NEXT_PUBLIC_API_URL; // avoid circular dependency so dont reference from index.js
const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL; // avoid circular dependency so dont reference from index.js

const endpoints = {
  // API endpoints
  api: {
    login: `${apiUrl}/api/login`,
    logout: `${apiUrl}/api/logout`,
    cmsProxy: `${apiUrl}/api/cms-proxy`,
    tours: `${apiUrl}/api/tours`,
    tour: `${apiUrl}/api/tour/:slug`,
  },

  // CMS endpoints
  cms: {
    login: `${cmsUrl}/api/auth/local`,
    tours: `${cmsUrl}/api/tours?populate=*`,
    tour: `${cmsUrl}/api/tours?populate[tourSteps][populate]=*&filters\[slug\][$eq]=:slug`,
    currentUser: `${cmsUrl}/api/users/me?populate=role`,
  },
};

export default endpoints;
