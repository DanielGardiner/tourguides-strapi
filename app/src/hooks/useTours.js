import { endpoints, cmsToken } from "@/constants";
import sleep from "@/functions/sleep";
import { useQuery } from "react-query";

const url = endpoints.api.tours;

const getTours = async () => {
  await sleep(600);
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) throw Error(response);
  const result = await response.json();
  return result;
};

export default function useTours() {
  return useQuery(["tours"], getTours);
}
