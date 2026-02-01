// src/features/agents/agentsAPI.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiDomain } from "../../utils/ApiDomains";

// Full Agent type matching your database table
export type Agent = {
  agent_id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone_number: string;
  role: string;
};

export const agentsAPI = createApi({
  reducerPath: "agentsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: ApiDomain }),
  tagTypes: ["Agents"],
  endpoints: (builder) => ({
    // GET all agents
    getAgents: builder.query<Agent[], void>({
      query: () => "/agents",
      providesTags: ["Agents"],
    }),

    // GET single agent by ID
    getAgentById: builder.query<Agent, number>({
      query: (id) => `/agents/${id}`,
      providesTags: ["Agents"],
    }),

    // Create new agent
    createAgent: builder.mutation<Agent, Partial<Agent>>({
      query: (body) => ({
        url: "/agents",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Agents"],
    }),

    // Update agent
    updateAgent: builder.mutation<Agent, { agent_id: number; body: Partial<Agent> }>({
      query: ({ agent_id, body }) => ({
        url: `/agents/${agent_id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Agents"],
    }),

    // Delete agent
    deleteAgent: builder.mutation<{ success: boolean; agent_id: number }, number>({
      query: (id) => ({
        url: `/agents/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Agents"],
    }),
  }),
});

// Export hooks for components
export const {
  useGetAgentsQuery,
  useGetAgentByIdQuery,
  useCreateAgentMutation,
  useUpdateAgentMutation,
  useDeleteAgentMutation,
} = agentsAPI;
