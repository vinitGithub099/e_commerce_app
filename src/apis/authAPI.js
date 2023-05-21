import { api } from "./Utilities/axiosConfigs";

export const authAPI = {
  loginUser: async (data) => {
    const result = await api.request({
      url: `/auth/login`,
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
};
