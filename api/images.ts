import { CategoryType } from "@/types";
import { axiosInstance as axios } from "./axios";
import { UNSPLASH_ACCESS_KEY } from "@env";

export const GetImages = async ({ category }: { category: CategoryType }) => {
  const response = await axios.get("/search/photos", {
    params: {
      per_page: 20,
      page: 1,
      query: category,
      client_id: UNSPLASH_ACCESS_KEY,
    },
  });
  const { data, status } = response;
  if (status === 200) {
    return ResponseDto(data.results);
  } else {
    return null;
  }
};

const ResponseDto = (data: any[]) => {
  if (!data) return ["nothing"];
  const response = [];

  for (let i = 0; i < data.length; i += 1) {
    const current = data[i];
    response.push({
      name: current.slug,
      description: current.description,
      width: current.width,
      height: current.height,
      updatedAt: current.updated_at,
      url: current.urls.regular,
    });
  }
  return response;
};
