import { useQuery } from "react-query";
import request from "../../shared/request";

export const useGetAllMakes = () => {
  return useQuery(["all-makes"], async () => {
    const data = await request("/makes");
    return data;
  });
};
export const useGetModels = (make = "") => {
  return useQuery(
    [`${make}-models`],
    async () => {
      const data = await request(`/models?make=${make}`);
      return data;
    },
    {
      enabled: make !== "",
    }
  );
};

export const useGetVehicles = (make = "", model = "") =>
  useQuery(
    `vehicles-${make}-${model}`,
    async () => {
      const query = `/vehicles?make=${make}&model=${model}`;
      const data = await request(query);
      return data;
    },
    {
      enabled: make !== "" && model !== "",
    }
  );
