import { toast } from "sonner";
import { ticketsAPI, type TypeTicket } from "../../../../features/tickets/ticketsAPI";

type DeleteTicketProps = {
    ticket: TypeTicket | null;
};

export const DeleteTicket = ({ ticket }: DeleteTicketProps) => {

    const [deleteTicket, { isLoading }] = ticketsAPI.useDeleteTicketMutation();

    const handleDelete = async () => {
        try {
            if (!ticket) {
                toast.error("No ticket selected for deletion.");
                return;
            }

            await deleteTicket(ticket.ticket_no).unwrap();
            toast.success("Ticket deleted successfully");

            (document.getElementById('delete-ticket-modal') as HTMLDialogElement)?.close();

        } catch (error: any) {
            console.error(error);

            if (error?.data?.message?.includes("REFERENCE constraint")) {
                toast.error("Cannot delete ticket: It has associated comments.");
            } else {
                toast.error(error?.data?.message || "Failed to delete ticket. Please try again.");
            }
        }
    };

    return (
        <dialog id="delete-ticket-modal" className="modal sm:modal-middle">
            <div className="modal-box bg-gray-600 text-white w-full max-w-xs sm:max-w-lg mx-auto rounded-lg">
                <h3 className="font-bold text-lg mb-4">Delete Ticket</h3>
                <p className="mb-6">
                    Are you sure you want to delete{" "}
                    <span className="font-semibold">{ticket?.title}</span>?
                </p>

                <div className="modal-action flex gap-4">
                    <button
                        data-test="delete-ticket-confirm-button"
                        className="btn btn-error"
                        onClick={handleDelete}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span className="loading loading-spinner"></span>
                                Deleting...
                            </>
                        ) : (
                            "Yes, Delete"
                        )}
                    </button>

                    <button
                        className="btn"
                        type="button"
                        onClick={() =>
                            (document.getElementById('delete-ticket-modal') as HTMLDialogElement)?.close()
                        }
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </dialog>
    );
};
