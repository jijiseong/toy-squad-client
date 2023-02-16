import axios from "axios";

const BASE_URL_PROD = "";
const BASE_URL_DEV = "http://localhost:8000";

export const sendToServer = async (url: string, method: string, data: any) => {
  const axiosOption = {
    method,
    url: BASE_URL_DEV + url,
    data,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  return axios(axiosOption);
};
