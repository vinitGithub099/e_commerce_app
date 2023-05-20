import { api } from "./Utilities/axiosConfigs";

export const cartAPI = {
  getAllCarts: async () => {
    const result = await api.request({
      url: `/carts`,
      method: `GET`,
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  getSingleCart: async (cartId) => {
    const result = await api.request({
      url: `/carts/${cartId}`,
      method: `GET`,
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  getCartsOfUser: async (cartId) => {
    const result = await api.request({
      url: `/carts/user/${cartId}`,
      method: `GET`,
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  addCart: async (data) => {
    const result = await api.request({
      url: `/carts/add`,
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
  updateCart: async (data, cartId) => {
    const result = await api.request({
      url: `/carts/${cartId}`,
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
  deleteCart: async (cartId) => {
    const result = await api.request({
      url: `/carts/${cartId}`,
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
