// src/features/tickets/ticketsAPI.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiDomain } from "../../utils/ApiDomains";
import type { RootState } from "../../app/store";

export type TypeTicket = {
  ticket_no: number;
  title: string;
  description: string;
  customer_ID: number;
  priority: string;
  status: string;
  created_at: string;
  updated_at: string;
  due_date: string;
  agent_id?: number;
};

export const ticketsAPI = createApi({
  reducerPath: "ticketsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: ApiDomain,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).customer?.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Tickets"],
  endpoints: (builder) => ({
    getTickets: builder.query<TypeTicket[], void>({
      query: () => "/tickets",
      providesTags: ["Tickets"],
    }),

    createTicket: builder.mutation<TypeTicket, Partial<TypeTicket>>({
      query: (newTicket) => ({
        url: "/addticket",
        method: "POST",
        body: newTicket,
      }),
      invalidatesTags: ["Tickets"],
    }),

    getMyTickets: builder.query<TypeTicket[], number>({
      query: (customer_ID) => `/tickets/customer/${customer_ID}`,
      providesTags: ["Tickets"],
    }),

    deleteTicket: builder.mutation<void, number>({
      query: (ticket_no) => ({
        url: `/tickets/${ticket_no}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tickets"],
    }),

    updateTicket: builder.mutation<TypeTicket, Partial<TypeTicket> & { ticket_no: number }>({
      query: ({ ticket_no, ...patch }) => ({
        url: `/tickets/${ticket_no}`,
        method: "PUT",
        body: patch,
      }),
      invalidatesTags: ["Tickets"],
    }),

    // ✅ New mutation: only assign agent
    assignTicket: builder.mutation<
      { success: boolean; ticket_no: number; agent_id: number },
      { ticket_no: number; agent_id: number }
    >({
      query: ({ ticket_no, agent_id }) => ({
        url: `/tickets/assign`,
        method: "PUT",
        body: { ticket_no, agent_id },
      }),
      invalidatesTags: ["Tickets"],
    }),
  }),
});

export const {
  useGetTicketsQuery,
  useCreateTicketMutation,
  useDeleteTicketMutation,
  useUpdateTicketMutation,
  useAssignTicketMutation,
  useGetMyTicketsQuery,
} = ticketsAPI;
