import { api } from "./Utilities/axiosConfigs";

export const userAPI = {
  getAllUsers: async () => {
    const result = await api.request({
      url: `/users`,
      method: `GET`,
      signal: new AbortController().signal,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
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
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
  addUser: async (data) => {
    const result = await api.request({
      url: `/users`,
      method: `POST`,
      data: data,
      signal: new AbortController().signal,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
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
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
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
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (result.status === 200) {
      return result.data;
    } else {
      return result.message;
    }
  },
};
