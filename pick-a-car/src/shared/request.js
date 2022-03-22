import axios, { AxiosResponse, Method } from "axios";
import { API_ROOT } from "./config";

const request = async (
  url: string,
  payload?: any,
  method?: Method,
  contentType?: string
): Promise<any> => {
  const endpoint = `${API_ROOT}${url}`;
  try {
    const response: AxiosResponse = await axios({
      data: payload,
      url: endpoint,
      method: method || "GET",
      headers: {
        "Content-Type": contentType || "application/json",
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const { status } = error.response;
      if (
        status === 403 ||
        status === 400 ||
        status === 404 ||
        status === 400
      ) {
        throw error;
      } else if (status >= 500) {
        throw error;
      }
    } else if (error.request) {
      //network problem or a gateway issue where there is no response received
    }
  }
};

export default request;
