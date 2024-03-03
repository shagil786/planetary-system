import axios from "axios";

export const getAllPlanteryData = (endpoint, page) =>
  axios
    .get(`${endpoint}${page ? `&page=${page}` : ""}`)
    .then(({ data }) => data);
