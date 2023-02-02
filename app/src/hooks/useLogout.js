import { endpoints } from "@/constants";
import { useMutation, useQueryClient } from "react-query";

const url = endpoints.api.logout;

const logout = async () => {
  const response = await fetch(url, {
    method: "GET",
  });
  if (!response.ok) throw Error(response);
  const result = await response.json();
  return result;
};

export default function useLogout() {
  const queryClient = useQueryClient();
  return useMutation(logout, {
    onSuccess: async () => {
      await queryClient.setQueryData(["user"], undefined);
      await queryClient.invalidateQueries(["user"]);
    },
  });
}
