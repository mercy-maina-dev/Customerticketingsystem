import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiDomain } from "../../utils/ApiDomains";

export type TCustomer = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_no: string;
  password: string;
  role: string;
};

export const customersAPI = createApi({
  reducerPath: 'customersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: ApiDomain }),
  tagTypes: ['customers'],
  endpoints: (builder) => ({
    // Create a customer
    createCustomer: builder.mutation<TCustomer, Partial<TCustomer>>({
      query: (newCustomer) => ({
        url: '/addcustomer',
        method: 'POST',
        body: newCustomer,
      }),
      invalidatesTags: ['customers'],
    }),
    // Verify a customer
    verifyCustomer: builder.mutation<{ message: string }, { email: string; code: string }>({
      query: (data) => ({
        url: '/verify',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['customers'],
    }),
    // Get all customers
    getCustomers: builder.query<TCustomer[], void>({
      query: () => '/customers',
      providesTags: ['customers'],
    }),
    // ✅ Update a customer
    updateCustomer: builder.mutation<TCustomer, Partial<TCustomer> & { id: number }>({
      query: ({ id, ...data }) => ({
        url: `/customers/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['customers'],
    }),
    // ✅ Delete a customer
    deleteCustomer: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/customers/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['customers'],
    }),
  }),
});

// Export hooks
export const {
  useCreateCustomerMutation,
  useGetCustomersQuery,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,
  useVerifyCustomerMutation,
} = customersAPI;
