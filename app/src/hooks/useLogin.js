import { endpoints } from "@/constants";
import sleep from "@/functions/sleep";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";

const url = endpoints.api.login;

const login = async ({ identifier, password }) => {
  await sleep(600);
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
  if (!response.ok) return Promise.reject(result);
  return result;
};

export default function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation(
    ({ identifier, password }) => login({ identifier, password }),
    {
      onSuccess: async () => {
        queryClient.invalidateQueries(["tours"]);
        await queryClient.invalidateQueries(["user"]);
        router.push("/");
      },
    }
  );
}
