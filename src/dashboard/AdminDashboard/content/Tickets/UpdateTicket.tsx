import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { toast } from "sonner";
import { ticketsAPI, type TypeTicket } from "../../../../features/tickets/ticketsAPI";
import { type RefObject } from "react";

type UpdateTicketProps = {
  ticket: TypeTicket | null; // can be null if no ticket selected
  modalRef?: RefObject<HTMLDialogElement>;
};

type UpdateTicketInputs = {
  title: string;
  description: string;
  customer_ID: number;
  priority: string;
  status: string;
  due_date: string;
  
};

const schema = yup.object({
  title: yup.string().max(75).required("Title is required"),
  description: yup.string().max(255).required("Description is required"),
  customer_ID: yup.number().positive().integer().required("Customer ID is required"),
  priority: yup.string().required("Priority is required"),
  status: yup.string().required("Status is required"),
  due_date: yup.string().required("Due date is required"),
});

export const UpdateTicket = ({ ticket, modalRef }: UpdateTicketProps) => {
  const [updateTicket, { isLoading }] = ticketsAPI.useUpdateTicketMutation();

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<UpdateTicketInputs>({
    resolver: yupResolver(schema),
  });

  // Populate form when a ticket is selected
  useEffect(() => {
    if (ticket) {
      setValue("title", ticket.title);
      setValue("description", ticket.description);
      setValue("customer_ID", ticket.customer_ID);
      setValue("priority", ticket.priority);
      setValue("status", ticket.status);
      setValue("due_date", ticket.updated_at.slice(0, 10));
    } else {
      reset();
    }
  }, [ticket, setValue, reset]);

  const onSubmit: SubmitHandler<UpdateTicketInputs> = async (data) => {
    if (!ticket) {
      toast.error("No ticket selected for update.");
      return;
    }

    try {
      await updateTicket({ ...data, ticket_no: ticket.ticket_no }).unwrap();
      toast.success("Ticket updated successfully");
      if (modalRef?.current) modalRef.current.close();
      else (document.getElementById("update-ticket-modal") as HTMLDialogElement)?.close();
    } catch (error: any) {
      console.error(error);
      toast.error(error?.data?.message || "Failed to update ticket. Please try again.");
    }
  };

  return (
    <dialog ref={modalRef} id="update-ticket-modal" className="modal sm:modal-middle">
      <div className="modal-box bg-gray-600 text-white w-full max-w-xs sm:max-w-lg mx-auto rounded-lg">
        <h3 className="font-bold text-lg mb-4">Update Ticket</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input type="text" {...register("title")} placeholder="Title" className="input w-full p-2 text-gray-800 bg-white" />
          {errors.title && <span className="text-sm text-red-700">{errors.title.message}</span>}

          <textarea {...register("description")} placeholder="Description" className="textarea w-full p-2 text-gray-800 bg-white" />
          {errors.description && <span className="text-sm text-red-700">{errors.description.message}</span>}

          <input type="number" {...register("customer_ID")} placeholder="Customer ID" className="input w-full p-2 text-gray-800 bg-white" />
          {errors.customer_ID && <span className="text-sm text-red-700">{errors.customer_ID.message}</span>}

          <input type="text" {...register("priority")} placeholder="Priority" className="input w-full p-2 text-gray-800 bg-white" />
          {errors.priority && <span className="text-sm text-red-700">{errors.priority.message}</span>}

          {/* Fixed status field: using select */}
          <label className="font-semibold">Status</label>
          <select {...register("status")} className="input w-full p-2 text-gray-800 bg-white">
            <option value="">Select status</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
            <option value="Closed">Closed</option>
          </select>
          {errors.status && <span className="text-sm text-red-700">{errors.status.message}</span>}

          <input type="date" {...register("due_date")} className="input w-full p-2 text-gray-800 bg-white" />
          {errors.due_date && <span className="text-sm text-red-700">{errors.due_date.message}</span>}

          <div className="modal-action">
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update"}
            </button>
            <button type="button" className="btn" onClick={() => { if (modalRef?.current) modalRef.current.close(); else (document.getElementById("update-ticket-modal") as HTMLDialogElement)?.close(); }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
