
import { useState } from "react";
import { useGetAgentsQuery } from "../../../../features/agents/agentsAPI";
import { useGetTicketsQuery, useAssignTicketMutation, type TypeTicket } from "../../../../features/tickets/ticketsAPI";
import { FaEdit } from "react-icons/fa";

export default function Agents() {
  const { data: agentsData, isLoading: agentsLoading, isError: agentsError } = useGetAgentsQuery();
  const { data: ticketsResponse, isLoading: ticketsLoading, isError: ticketsError } = useGetTicketsQuery();
  const [assignTicket] = useAssignTicketMutation();

  const [selectedTickets, setSelectedTickets] = useState<Record<number, string>>({});

  if (agentsLoading || ticketsLoading) return <p>Loading...</p>;
  if (agentsError || ticketsError) return <p className="text-red-500">Error loading data.</p>;

  const agents = (agentsData ?? []).filter((agent) => agent.agent_id >= 1 && agent.agent_id <= 7);


  const tickets: TypeTicket[] = Array.isArray(ticketsResponse) ? ticketsResponse : ticketsResponse?.data ?? [];

  const handleAssignTicket = async (agentId: number) => {
    const selected = selectedTickets[agentId] ?? "";
    const ticketNo = parseInt(selected, 10);
    if (Number.isNaN(ticketNo) || ticketNo <= 0) return alert("Please select a ticket first.");

    try {
      await assignTicket({ ticket_no: ticketNo, agent_id: agentId }).unwrap();
      alert(`Ticket ${ticketNo} assigned to agent ${agentId}`);
      setSelectedTickets((prev) => ({ ...prev, [agentId]: "" }));
    } catch (err: any) {
      console.error("Error assigning ticket:", err);
      alert(err?.data?.message || "Failed to assign ticket.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Agents</h1>

      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Assign Ticket</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr key={agent.agent_id} className="hover:bg-gray-100">
              <td className="p-2 border text-center">{agent.agent_id}</td>
              <td className="p-2 border">{agent.firstname} {agent.lastname}</td>
              <td className="p-2 border">{agent.role}</td>
              <td className="p-2 border">{agent.email}</td>
              <td className="p-2 border">{agent.phone_number}</td>
              <td className="p-2 border flex items-center gap-2">
                <select
                  aria-label={`Select ticket for agent ${agent.agent_id}`}
                  value={selectedTickets[agent.agent_id] ?? ""}
                  onChange={(e) =>
                    setSelectedTickets((prev) => ({
                      ...prev,
                      [agent.agent_id]: e.target.value,
                    }))
                  }
                  className="border p-1 rounded"
                >
                  <option value="">--Select Ticket--</option>
                  {tickets.map((ticket) => (
                    <option key={ticket.ticket_no} value={String(ticket.ticket_no)}>
                      {ticket.ticket_no} - {ticket.title}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => handleAssignTicket(agent.agent_id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center gap-1"
                >
                  <FaEdit /> Assign
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {agents.length === 0 && <p className="mt-4">No agents found with IDs 1-7.</p>}
    </div>
  );
}
