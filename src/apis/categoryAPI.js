import { api } from "./Utilities/axiosConfigs";

export const categoriesAPI = {
  getAllCategories: async () => {
    const result = await api.request({
      url: `/categories`,
      method: `GET`,
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  getSingleCategory: async (category) => {
    const result = await api.request({
      url: `/categories/${category}`,
      method: `GET`,
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  addCategory: async (data) => {
    const result = await api.request({
      url: `/categories`,
      method: `POST`,
      data: data,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  updateCategory: async (category, data) => {
    const result = await api.request({
      url: `/categories/${category}`,
      method: `PUT`,
      data: data,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  deleteCategory: async (category) => {
    const result = await api.request({
      url: `/categories/${category}`,
      method: `DELETE`,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
};
