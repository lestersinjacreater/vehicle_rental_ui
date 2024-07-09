// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { RootState } from '../../app/store';
// import { AuthState, LoginCredentials, RegisterCredentials } from '../../types/auth';
// import { authApi } from './authApi';

// const initialState: AuthState = {
//   user: null,
//   token: null,
//   isLoading: false,
//   error: null,
// };

// export const login = createAsyncThunk(
//   'auth/login',
//   async (credentials: LoginCredentials, { rejectWithValue }) => {
//     try {
//       const { token, user } = await authApi.login(credentials);
//       return { token, user };
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials: RegisterCredentials, { rejectWithValue }) => {
//     try {
//       const { token, user } = await authApi.register(credentials);
//       return { token, user };
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(login.pending, (state) => {
//       state.isLoading = true;
//       state.error = null;
//     });
//     builder.addCase(login.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     });
//     builder.addCase(login.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload as string;
//     });

//     builder.addCase(register.pending, (state) => {
//       state.isLoading = true;
//       state.error = null;
//     });
//     builder.addCase(register.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     });
//     builder.addCase(register.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload as string;
//     });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;

// export const selectCurrentUser = (state: RootState) => state.auth.user;
