import axios from "axios";

const MODELS_API_ENDPOINT = "/api/sheet-data/";

/**
 * Fetches models with pagination.
 * @param {number} page The page number to fetch.
 * @param {number} limit The number of items per page (page_size).
 * @returns {Promise<Object>} The API response containing results, current page, count, etc.
 */

export const getModels = async ({ page, limit, search, category, tag }) => {
  const params = {
    page,
    page_size: limit,
  };

  if (search) params.search = search;
  if (category && category !== "all") params.categories = category;
  if (tag && tag !== "all") params.tags = tag;

  const response = await axios.get(MODELS_API_ENDPOINT, { params });

  return response.data;
};
