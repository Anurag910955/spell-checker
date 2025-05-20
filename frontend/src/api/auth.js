import API from './axios';

// Register user
export const register = async (email, password) => {
  const res = await API.post('/api/auth/register', { email, password });
  return res.data;
};

// Login user
export const login = async (email, password) => {
  const res = await API.post('/api/auth/login', { email, password });
  return res.data;
};
