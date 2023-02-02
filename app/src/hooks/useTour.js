import { endpoints, cmsToken } from "@/constants";
import sleep from "@/functions/sleep";
import { useQuery } from "react-query";

const url = endpoints.api.tour;

const getTour = async (slug) => {
  await sleep(600);
  const response = await fetch(url.replace(":slug", slug), {
    method: "GET",
    credentials: 'include',
  });
  if (!response.ok) throw Error(response);
  const result = await response.json();
  return result;
};

export default function useTour(slug) {
  return useQuery(["tours", slug], () => getTour(slug));
}
