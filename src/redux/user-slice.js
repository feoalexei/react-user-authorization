import { createSlice } from '@reduxjs/toolkit';
import { logOutThunk, registerThunk } from './user-thunk';

const initialState = {
  isLoading: false,
  error: '',
  user: {
    user: {},
    token: '',
  },
};

const authSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(logOutThunk.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(logOutThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
