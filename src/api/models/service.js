import axios from "axios";

// export const getModels = () =>
//   axios.get("/api/sheet-data/?page=1&page_size=10", {
//   });

const MODELS_API_ENDPOINT = "/api/sheet-data/";

/**
 * Fetches models with pagination.
 * @param {number} page The page number to fetch.
 * @param {number} limit The number of items per page (page_size).
 * @returns {Promise<Object>} The API response containing results, current page, count, etc.
 */

export const getModels = async ({ page, limit }) => {
  const response = await axios.get(MODELS_API_ENDPOINT, {
    params: {
      page: page,
      page_size: limit,
    },
  });
  return response.data; // Assuming response.data contains { results, next, previous, count }
};
