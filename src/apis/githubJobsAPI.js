import { api } from "./axios";

export const getList = (params = {}) => {
  return api.get("/recruitment/positions.json", { params });
};

export const getDetail = (id) => {
  return api.get(`/recruitment/positions/${id}`);
};
