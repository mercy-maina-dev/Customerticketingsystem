import { ticketsAPI } from "../../../../features/tickets/ticketsAPI";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../app/store";

export default function MyTickets() {
  const customerID = useSelector((state: RootState) => state.customer?.customer?.customer_ID);
  const { data, isLoading, isError } = ticketsAPI.useGetMyTicketsQuery(customerID as number, { skip: !customerID });

  if (isLoading) return <p>Loading your tickets...</p>;
  if (isError) return <p>Failed to load tickets.</p>;

  const tickets = Array.isArray(data) ? data : [];

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">My Tickets</h1>

      {tickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Ticket No</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket: any) => (
              <tr key={ticket.ticket_no} className="hover:bg-gray-100">
                <td className="p-2 border text-center">{ticket.ticket_no}</td>
                <td className="p-2 border">{ticket.title}</td>
                <td className="p-2 border">{ticket.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
