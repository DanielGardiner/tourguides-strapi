import Cookies from "cookies";

export default async function handler(req, res) {
  const cookies = new Cookies(req, res);

  // Remove jwt cookie
  cookies.set("jwt");

  res.status(200).json({ message: "success" });
}
