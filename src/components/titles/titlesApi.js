import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    listPosts: builder.query({
      query: (page = 1) => `https://poetrydb.org/random/5?page=${page}`,
    }),
  }),
});

export const { useListPostsQuery } = api;

export default api.reducer;