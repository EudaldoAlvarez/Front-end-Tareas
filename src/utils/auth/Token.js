export const getToken = () => {
  return localStorage.getItem("token");
};

export const setToken = (token) => {
  try {
    localStorage.setItem("token", token);
    return true;
  } catch (error) {
    return false;
  }
};

export const deleteToken = () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    return false;
  }
};
