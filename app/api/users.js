import client from "./client";

const endpoint = "/users";

const register = (userInfo) => client.post("/users", userInfo);

export default {
  register,
};
