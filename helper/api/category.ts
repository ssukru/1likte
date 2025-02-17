import { Category } from "@/types/category";
import customFetch, { createFullUrl } from "@/utils/fetch";

interface CategoriesResponse {
  categories: Category[];
  success: boolean;
}

export const fetchCategories = async (query?: string) => {
  const url = createFullUrl("/api/categories");
  if (query) {
    url.searchParams.set("q", query);
  }

  const response = await customFetch(url.toString());
  return response.json() as Promise<CategoriesResponse>;
};
