// Import necessary functions from Redux Toolkit's RTK Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//import { ReturnType } from '@reduxjs/toolkit';

// Define the structure of a User object
export interface User {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  address: string;
}

// Define a service using RTK Query
export const usersAPI = createApi({
  reducerPath: 'usersApi',  // Name for the slice of the Redux store
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),  // Base URL for API requests
  tagTypes: ['User'],  // Tag type for caching
  endpoints: (builder) => ({
    // Define a query endpoint to fetch users
    getUsers: builder.query<User[], void>({
      query: () => 'users',  // Endpoint path
      //providesTags: ['User'],  // Tags to invalidate when data changes
    }),
    // Define a mutation endpoint to add a new user
    addUser: builder.mutation<User, Partial<User>>({
      query: (newUser) => ({
        url: 'users',  // API endpoint for adding users
        method: 'POST',  // HTTP method
        body: newUser,  // Data to send in the request body
      }),
      invalidatesTags: ['User'],  // Invalidate cache when mutation occurs
    }),
    // Define a mutation endpoint to delete a user
    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `users/${id}`,  // API endpoint to delete a specific user
        method: 'DELETE',  // HTTP method
      }),
      invalidatesTags: ['User'],  // Invalidate cache when mutation occurs
    }),
    // Define a mutation endpoint to update a user
    updateUser: builder.mutation<User, Partial<User>>({
      query: ({ id, ...patch }) => ({
        url: `users/${id}`,  // API endpoint to update a specific user
        method: 'PATCH',  // HTTP method
        body: patch,  // Data to send in the request body
      }),
      invalidatesTags: ['User'],  // Invalidate cache when mutation occurs
    }),
  }),
});

// Export hooks with explicit type annotations for usage in components

