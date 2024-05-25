import { GetAccommodationDetail } from "../../app/api/api";
import { httpToken } from "@/config/http";

const accommodationDetailApi = {
  getAccommodationDetailSlice: async (slug) =>
    await httpToken.get(GetAccommodationDetail(slug)),
};

export default accommodationDetailApi;
