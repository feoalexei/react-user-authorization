import { createAsyncThunk } from '@reduxjs/toolkit';
import { logOutUser, signUpUser, token } from 'services/user-api';

export const registerThunk = createAsyncThunk(
  'users/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signUpUser(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'users/refresh',
  async (_, { rejectWithValue, getState }) => {
    try {
      const accessToken = getState().user.token;
      token.set(accessToken);
      // /user/current request should be here
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logOutUser();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
