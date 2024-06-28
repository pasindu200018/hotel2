import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://3.93.228.84/api";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
});