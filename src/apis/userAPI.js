import { api } from "./Utilities/axiosConfigs";

export const userAPI = {
  getAllUsers: async () => {
    const result = await api.request({
      url: `/users`,
      method: `GET`,
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  getSingleUser: async (userId) => {
    const result = await api.request({
      url: `/users/${userId}`,
      method: `GET`,
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  searchUsers: async (userName) => {
    const result = await api.request({
      url: `/users/search?q=${userName}`,
      method: `GET`,
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  filterUsers: async (filterParams) => {
    const result = await api.request({
      url: `/users/filter?${filterParams}`,
      method: `GET`,
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  getPaginatedUsers: async (limit, skip, selectParams) => {
    const result = await api.request({
      url: `/users?limit=${limit}&skip=${skip}&select=${selectParams}`,
      method: `GET`,
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  getUserCartByUserId: async (userId) => {
    const result = await api.request({
      url: `/users/${userId}/carts`,
      method: `GET`,
      signal: new AbortController().signal,
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  addUser: async (data) => {
    const result = await api.request({
      url: `/users/add`,
      method: `POST`,
      data: data,
      signal: new AbortController().signal,
      headers: { "Content-Type": "application/json" },
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  updateUser: async (data, userId) => {
    const result = await api.request({
      url: `/users/${userId}`,
      method: `PUT`,
      data: data,
      signal: new AbortController().signal,
      headers: { "Content-Type": "application/json" },
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  deleteUser: async (userId) => {
    const result = await api.request({
      url: `/users/${userId}`,
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
