import { api } from "./Utilities/axiosConfigs";

export const productsAPI = {
  getAllProducts: async () => {
    const result = await api.request({
      url: `/products`,
      method: `GET`,
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  getSingleProduct: async (data, productName) => {
    const result = await api.request({
      url: `/products/${productName}`,
      method: `GET`,
      data: data,
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  getPaginatedProducts: async (data, page, limit) => {
    const result = await api.request({
      url: `/products?limit=${limit}&page=${page}`,
      method: "GET",
      data: data,
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  addProduct: async (data) => {
    const result = await api.request({
      url: `/products`,
      method: `POST`,
      data: data,
      headers: {
        "Content-type": "multipart/form-data",
      },
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  updateProduct: async (data, productName) => {
    const result = await api.request({
      url: `/products/${productName}`,
      method: `PUT`,
      data: data,
      headers: {
        "Content-type": "multipart/form-data",
      },
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  deleteProduct: async (data, productName) => {
    const result = await api.request({
      url: `/products/${productName}`,
      method: `DELETE`,
      data: data,
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
};
