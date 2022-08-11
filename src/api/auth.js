import { createAxiosInstance } from "./config";

export const login = async (input) => {
  const res = await createAxiosInstance().post("users/login", input);
  const { data } = res;
  localStorage.setItem(
    "TFA",
    JSON.stringify({
      data,
    })
  );
  return data;
};
