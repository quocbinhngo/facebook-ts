import { LoginPayload, RegisterPayload, User } from "../models/user";
import axiosClient from "./axiosClient";

const userService = {
  logIn: async (input: LoginPayload): Promise<User> => {
    const url = "/users/login";
    return await axiosClient.post(url, input);
  },
  register: async (input: RegisterPayload): Promise<User> => {
    const url = "/users/register";
    return await axiosClient.post(url, input);
  },
};

export default userService;
