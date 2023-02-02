import { cmsToken, endpoints, userRoles } from "@/constants";
import Cookies from "cookies";

const urlTours = endpoints.cms.tours;
const urlCurrentUser = endpoints.cms.currentUser;

export default async function handler(req, res) {
  try {
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

    async function getTours() {
      const toursResponse = await fetch(urlTours, {
        headers: {
          Authorization: `Bearer ${cmsToken}`,
        },
      });
      const tours = await toursResponse.json();
      return tours;
    }

    const [currentUser, tours] = await Promise.all([
      getCurrentUser(),
      getTours(),
    ]);

    const currentUserRole = currentUser?.role?.name;

    // If user does not have the AUTHENTICATED role, then only return tour steps that are free
    if (currentUserRole !== userRoles.AUTHENTICATED) {
      tours.data = tours.data.map((tour) => {
        tour.attributes.tourSteps = tour.attributes.tourSteps.map((tourStep) => {
          if (tourStep.isFree) return tourStep;
          return {
            ...tourStep,
            description: null,
            audio: null,
          };
        });
        return tour;
      });
    }

    res.status(200).json(tours);
  } catch (error) {
    handleError(res, error);
  }
}

function handleError(res, error) {
  console.log(error);

  // if(error instanceof ValidationError) {
  //   return res.status(400).json({ message: error.message });
  // }

  return res.status(500).json({ message: "Unknown error" });
}
