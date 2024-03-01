import axios, { AxiosRequestConfig } from "axios";
import logger from "./logger";

interface ApiFunctionOptions {
  method?: "get" | "post" | "put" | "delete";
  data?: any;
  headers?: Record<string, string>;
}
interface ApiError {
  message: string;
  status?: number;
}

export const fetchApi = async (
  url: string,
  options: ApiFunctionOptions = {}
) => {
  try {
    const config: AxiosRequestConfig = {
      url,
      method: options.method || "get",
      data: options.data,
      headers: options.headers,
    };

    const response = await axios.request(config);
    return response.data;
  } catch (error: any) {
    const apiError: ApiError = {
      message: error.response?.data?.message || error.message,
      status: error.response?.status,
    };
    logger.error(apiError.message);
  }
};
