import { useState } from "react";
import { ticketsAPI } from "../../../../features/tickets/ticketsAPI";

export default function CreateTicket() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createTicket] =ticketsAPI.useCreateTicketMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await createTicket({ title, description }).unwrap();
      alert("Ticket created successfully!");
      setTitle("");
      setDescription("");
    } catch (err: any) {
      alert("Failed to create ticket");
    }
  };

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Create Ticket</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl bg-white p-4 shadow rounded"
      >
        <label className="block mb-2">Title</label>
        <input
          className="border p-2 w-full mb-4 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label className="block mb-2">Description</label>
        <textarea
        placeholder="enter description"
          className="border p-2 w-full mb-4 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit Ticket
        </button>
      </form>
    </div>
  );
}
