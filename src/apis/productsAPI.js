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
  getSingleProduct: async (data, productId) => {
    const result = await api.request({
      url: `/products/${productId}`,
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
  searchProducts: async (data, productName) => {
    const result = await api.request({
      url: `/products/search?q=${productName}`,
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
  getPaginatedProducts: async (data, skip, limit) => {
    const result = await api.request({
      url: `/products?limit=${limit}&skip=${skip}`,
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
  getCategoryProducts: async (category) => {
    const result = await api.request({
      url: `/products/category/${category}`,
      method: `GET`,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  addProduct: async (data) => {
    const result = await api.request({
      url: `/products/add`,
      method: `POST`,
      data: data,
      headers: { "Content-Type": "application/json" },
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  updateProduct: async (data, productId) => {
    const result = await api.request({
      url: `/products/${productId}`,
      method: `PUT`,
      data: data,
      headers: { "Content-Type": "application/json" },
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  deleteProduct: async (productId) => {
    const result = await api.request({
      url: `/products/${productId}`,
      method: `DELETE`,
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
};
