// src/api.js
import axios from "axios";
import { API_BASE_URL } from "./config";

export const registerUser = async (userData: any) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/user/register`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
export const logUser = async (userData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/login`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
