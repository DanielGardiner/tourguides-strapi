import { endpoints, isDevelopment } from "@/constants";
import Cookies from "cookies";

const url = endpoints.cms.login;

const COOKIE_MAX_AGE = 60 * 60 * 24;

export default async function handler(req, res) {
  try {
    const { identifier, password } = req.body;

    // Get JWT and user from CMS
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        identifier,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    const result = await response.json();

    if (!response.ok) res.status(response.status).json(result.error);

    const cookies = new Cookies(req, res, {
      maxAge: COOKIE_MAX_AGE,
      httpOnly: true,
      // secure: isDevelopment ? false : true,
    });

    cookies.set("jwt", result.jwt);

    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
}
