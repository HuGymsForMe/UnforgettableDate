import axios from "./axios";

export const registerRequest = async (user) => axios.post("/register", user);