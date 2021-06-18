import axios from "axios";
import { getToken } from "../auth/Token";
import apiConfig from "./apiConfig";

const { apiUrl } = apiConfig;

const returnResponse = (response) => {
  if (!response.success) {
    if (response?.data?.message) {
      alert(`Error: ${response.data.message}`);
    } else {
      alert("Error inesperado");
    }
  }
  return response;
};

export const loginService = async (email, password) => {
  let response = {
    success: true,
    data: {},
  };
  try {
    const data = { email, password };
    const dataResponse = await axios.post(`${apiUrl}/usuarios/login`, data);
    response.data = dataResponse.data;
  } catch (error) {
    response.success = false;
    response.data = error?.response?.data;
  }
  return returnResponse(response);
};

export const registroService = async (email, password) => {
  let response = {
    success: true,
    data: {},
  };
  try {
    const data = { email, password };
    const dataResponse = await axios.post(`${apiUrl}/usuarios/sign-up`, data);
    response.data = dataResponse.data;
  } catch (error) {
    response.success = false;
    response.data = error?.response?.data;
  }
  return returnResponse(response);
}

export const isAuthService = async () => {
  const token = getToken();
  let response = {
    success: true,
    data: {},
  };
  if (token) {
    try {
      const dataResponse = await axios.get(`${apiUrl}/usuarios/is-auth`, {
        headers: {
          authorization: token,
        },
      });
      response.data = dataResponse.data;
    } catch (error) {
      response.success = false;
      response.data = error?.response?.data;
    }
  } else {
    response.success = false;
    response.data.message = "No ha iniciado sesión";
  }
  return response;
};
