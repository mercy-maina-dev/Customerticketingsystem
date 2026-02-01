import { useState, useRef } from "react";
import { useGetTicketsQuery, useDeleteTicketMutation, type TypeTicket } from "../../../../features/tickets/ticketsAPI";
import { CreateTicket } from "./CreateTicket";
import { UpdateTicket } from "./UpdateTicket";

const Tickets = () => {
  const { data: ticketsResponse, isLoading, error } = useGetTicketsQuery();
  const tickets: TypeTicket[] = Array.isArray(ticketsResponse)
    ? ticketsResponse
    : (ticketsResponse as any)?.data ?? [];
  const [deleteTicket] = useDeleteTicketMutation();

  const [selectedTicket, setSelectedTicket] = useState<TypeTicket | null>(null);

  // Refs for modals
  const createModalRef = useRef<HTMLDialogElement>(null);
  const updateModalRef = useRef<HTMLDialogElement>(null);

  if (isLoading) return <p>Loading tickets...</p>;
  if (error) return <p>Error loading tickets</p>;

  const handleDelete = async (ticket_no: number) => {
    if (!confirm(`Delete ticket #${ticket_no}?`)) return;
    try {
      await deleteTicket(ticket_no).unwrap();
      alert("Ticket deleted successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to delete ticket");
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tickets</h1>
        <button
          className="btn btn-primary"
          onClick={() => createModalRef.current?.showModal()}
        >
          Create Ticket
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Ticket No</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Customer ID</th>
              <th className="px-4 py-2 border">Priority</th>
              
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Actions</th>

            </tr>
          </thead>
          <tbody>
            { tickets && tickets.map((ticket) => (
              <tr key={ticket.ticket_no} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{ticket.ticket_no}</td>
                <td className="px-4 py-2 border">{ticket.title}</td>
                <td className="px-4 py-2 border">{ticket.description}</td>
                <td className="px-4 py-2 border">{ticket.customer_ID}</td>
                <td className="px-4 py-2 border">{ticket.priority}</td>
              
                <td className="px-4 py-2 border">{ticket.status}</td>
                <td className="px-4 py-2 border flex gap-2">
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => {
                      setSelectedTicket(ticket);
                      updateModalRef.current?.showModal();
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(ticket.ticket_no)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals: always mounted */}
      <CreateTicket modalRef={createModalRef} />
      {selectedTicket && <UpdateTicket ticket={selectedTicket} modalRef={updateModalRef} />}
    </div>
  );
};

export default Tickets; 