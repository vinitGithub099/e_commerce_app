import { api } from "./Utilities/axiosConfigs";

export const authAPI = {
  loginUser: async (data) => {
    const result = await api.request({
      url: `/auth/login`,
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
  registerUser: async (data) => {
    const result = await api.request({
      url: `/auth/register`,
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
  refreshToken: async (data) => {
    const result = await api.request({
      url: `/auth/refresh`,
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
};
