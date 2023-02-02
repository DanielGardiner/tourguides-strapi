import { cmsToken, endpoints, userRoles } from "@/constants";
import Cookies from "cookies";

const urlTour = endpoints.cms.tour;
const urlCurrentUser = endpoints.cms.currentUser;

// TODO: A lot of this code is repeated in tour/slug.js and tours.js. Refactor to use a common function.

export default async function handler(req, res) {
  const { slug } = req.query;

  // Get JWT from cookie
  const cookies = new Cookies(req);
  const jwt = cookies.get("jwt");

  async function getCurrentUser() {
    const currentUserResponse = await fetch(urlCurrentUser, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const currentUser = await currentUserResponse.json();
    return currentUser;
  }

  async function getTour() {
    const tourResponse = await fetch(urlTour.replace(":slug", slug), {
      headers: {
        Authorization: `Bearer ${cmsToken}`,
      },
    });
    const tour = await tourResponse.json();
    return tour;
  }

  const [currentUser, tour] = await Promise.all([getCurrentUser(), getTour()]);

  const currentUserRole = currentUser?.role?.name;

  // If user does not have the AUTHENTICATED role, then only return tour steps that are free
  if (currentUserRole !== userRoles.AUTHENTICATED) {
    tour.data = tour.data.map((tour) => {
      tour.attributes.tourSteps = tour.attributes.tourSteps.map((tourStep) => {
        if (tourStep.isFree) return tourStep;
        return {
          ...tourStep,
          description: null,
        };
      });
      return tour;
    });
  }

  res.status(200).json(tour);
}
