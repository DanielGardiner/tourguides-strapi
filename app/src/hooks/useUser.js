import { endpoints, cmsToken } from "@/constants";
import cmsFetch from "@/requests/cmsFetch";
import { useQuery } from "react-query";

const url = endpoints.cms.currentUser;

const getUser = async () => {
  const response = await cmsFetch(url, {
    method: "GET",
    credentials: "include",
  });
  const result = await response.json();
  if (!response.ok) return Promise.reject(result.error);
  return result;
};

export default function useUser() {
  return useQuery(["user"], getUser);
}
