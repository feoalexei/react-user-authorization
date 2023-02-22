import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
  set(accessToken) {
    authAxios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  },
  unSet() {
    authAxios.defaults.headers.common.Authorization = '';
  },
};

export const signUpUser = async credentials => {
  const { data } = await authAxios.post('/users/signup', credentials);
  token.set(data.token);
  return data;
};

export const logOutUser = async () => {
  const { data } = await authAxios.post('/users/logout');
  token.unSet();
  return data;
};
