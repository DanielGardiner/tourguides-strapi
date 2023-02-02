import { endpoints, cmsToken } from "@/constants";
import sleep from "@/functions/sleep";

const url = endpoints.api.cmsProxy;

const cmsFetch = async (requestUrl, requestOptions) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        url: requestUrl,
        options: requestOptions,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default cmsFetch;
