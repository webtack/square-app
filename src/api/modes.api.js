import axios from "axios";

const baseUrl = "https://60816d9073292b0017cdd833.mockapi.io/modes";

export const getModesCollection = () => {
  return axios.get(baseUrl);
};
