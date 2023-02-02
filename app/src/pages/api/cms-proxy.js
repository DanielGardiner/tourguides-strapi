import { endpoints } from "@/constants";
import Cookies from "cookies";

const COOKIE_MAX_AGE = 60 * 60 * 24;

export default async function handler(req, res) {
  try {
    const { url, options = {} } = req.body;

    // Validate url
    if (!Object.values(endpoints.cms).includes(url)) {
      // TODO: introduce a ValidationError
      throw new Error("Invalid url");
    }

    // Get JWT from cookie
    const cookies = new Cookies(req, res);
    const jwt = cookies.get("jwt");

    // Append JWT to options
    if (options?.headers) {
      options.headers.Authorization = `Bearer ${jwt}`;
    } else {
      options.headers = {
        Authorization: `Bearer ${jwt}`,
      };
    }

    // Send request to CMS
    const response = await fetch(url, options);
    const result = await response.json();

    return res.status(response.status).json(result);
  } catch (error) {
    handleError(error);
  }
}

function handleError(error) {
  console.log(error);

  // if(error instanceof ValidationError) {
  //   return res.status(400).json({ message: error.message });
  // }

  return res.status(500).json({ message: "Unknown error" });
}
