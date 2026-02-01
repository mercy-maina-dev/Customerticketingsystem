import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";
import { ticketsAPI } from "../../../../features/tickets/ticketsAPI";
import { type RefObject } from "react";

export type CreateTicketInputs = {
  title: string;
  description: string;
  customer_ID: number;
  priority: string;
  status: string;
  due_date: string;
};

const schema: yup.ObjectSchema<CreateTicketInputs> = yup.object({
  title: yup.string().max(75).required("Title is required"),
  description: yup.string().max(255).required("Description is required"),
  customer_ID: yup.number().positive().integer().required("Customer ID is required"),
  priority: yup.string().required("Priority is required"),
  status: yup.string().required("Status is required"),
  due_date: yup.string().required("Due date is required"),
});

type CreateTicketProps = {
  modalRef?: RefObject<HTMLDialogElement>;
};

export const CreateTicket = ({ modalRef }: CreateTicketProps) => {
  const [createTicket, { isLoading }] = ticketsAPI.useCreateTicketMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTicketInputs>({
    resolver: yupResolver(schema),
  });
 
 const onSubmit: SubmitHandler<CreateTicketInputs> = async (data) => {
  console.log("Submitting ticket:", data);
    try {
      const response = await createTicket(data).unwrap();
      toast.success("Ticket created successfully");
      if (modalRef?.current) modalRef.current.close();
      else (document.getElementById("create-ticket") as HTMLDialogElement)?.close();
    } catch (error: any) {
      console.error("Error creating ticket:", error?.data || error);
      toast.error(error?.data?.message || "Failed to create ticket. Please try again.");
    }
};


  return (
    <dialog ref={modalRef} id="create-ticket" className="modal sm:modal-middle">
      <div className="modal-box bg-gray-600 text-white w-full max-w-xs sm:max-w-lg mx-auto rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="text"
            {...register("title")}
            placeholder="Ticket Title"
            className="input rounded w-full p-2 focus:ring-2 focus:ring-blue-500 text-lg bg-white text-gray-800"
          />
          {errors.title && <span className="text-sm text-red-700">{errors.title.message}</span>}

          <textarea
            {...register("description")}
            placeholder="Description"
            className="textarea textarea-bordered w-full p-2 focus:ring-2 focus:ring-blue-500 text-lg bg-white text-gray-800"
          />
          {errors.description && <span className="text-sm text-red-700">{errors.description.message}</span>}

          <input
            type="number"
            {...register("customer_ID")}
            placeholder="Customer ID"
            className="input rounded w-full p-2 focus:ring-2 focus:ring-blue-500 text-lg bg-white text-gray-800"
          />
          {errors.customer_ID && <span className="text-sm text-red-700">{errors.customer_ID.message}</span>}

          <input
            type="text"
            {...register("priority")}
            placeholder="Priority (e.g. High, Medium, Low)"
            className="input rounded w-full p-2 focus:ring-2 focus:ring-blue-500 text-lg bg-white text-gray-800"
          />
          {errors.priority && <span className="text-sm text-red-700">{errors.priority.message}</span>}

          <input
            type="text"
            {...register("status")}
            placeholder="Status (e.g. Open, In Progress, Resolved)"
            className="input rounded w-full p-2 focus:ring-2 focus:ring-blue-500 text-lg bg-white text-gray-800"
          />
          {errors.status && <span className="text-sm text-red-700">{errors.status.message}</span>}

          <input
            type="date"
            {...register("due_date")}
            className="input rounded w-full p-2 focus:ring-2 focus:ring-blue-500 text-lg bg-white text-gray-800"
          />
          {errors.due_date && <span className="text-sm text-red-700">{errors.due_date.message}</span>}

          <div className="modal-action">
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? (
                <>
                  <span className="loading loading-spinner text-primary" /> Creating...
                </>
              ) : (
                "Create"
              )}
            </button>

            <button
              className="btn"
              type="button"
              onClick={() => {
                if (modalRef?.current) modalRef.current.close();
                else (document.getElementById("create-ticket") as HTMLDialogElement)?.close();
              }}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}; 