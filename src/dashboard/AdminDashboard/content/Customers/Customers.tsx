import { useState } from "react";
import {
  useGetCustomersQuery,
  useCreateCustomerMutation,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,
} from "../../../../features/auth/customersAPI";

export type TCustomer = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_no: string;
  password?: string;
  role: string;
};

const Customers = () => {
  // Fetch customers
  const { data: customersData, isLoading, refetch } = useGetCustomersQuery();

  // Mutations
  const [createCustomer] = useCreateCustomerMutation();
  const [updateCustomer] = useUpdateCustomerMutation();
  const [deleteCustomer] = useDeleteCustomerMutation();

  // State for editing
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editData, setEditData] = useState<Partial<TCustomer>>({});

  // State for adding
  const [newCustomer, setNewCustomer] = useState<Partial<TCustomer>>({});

  if (isLoading) return <p>Loading customers...</p>;

  // Handlers
  const handleEdit = (customer: TCustomer) => {
    setEditingId(customer.id);
    setEditData({ ...customer });
  };

  const handleUpdate = async () => {
    if (editingId && editData.first_name && editData.last_name && editData.email) {
      await updateCustomer({ id: editingId, ...editData });
      setEditingId(null);
      setEditData({});
      refetch();
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      await deleteCustomer(id);
      refetch();
    }
  };

  const handleAdd = async () => {
    if (newCustomer.first_name && newCustomer.last_name && newCustomer.email) {
      await createCustomer(newCustomer);
      setNewCustomer({});
      refetch();
    } else {
      alert("Please fill all required fields");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Customers</h2>

      {/* Add New Customer Form */}
      <div className="mb-6 p-4 border rounded">
        <h3 className="font-semibold mb-2">Add New Customer</h3>
        <input
          type="text"
          placeholder="First Name"
          value={newCustomer.first_name || ""}
          onChange={(e) => setNewCustomer({ ...newCustomer, first_name: e.target.value })}
          className="border p-1 mr-2"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newCustomer.last_name || ""}
          onChange={(e) => setNewCustomer({ ...newCustomer, last_name: e.target.value })}
          className="border p-1 mr-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={newCustomer.email || ""}
          onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
          className="border p-1 mr-2"
        />
        <input
          type="text"
          placeholder="Phone No"
          value={newCustomer.phone_no || ""}
          onChange={(e) => setNewCustomer({ ...newCustomer, phone_no: e.target.value })}
          className="border p-1 mr-2"
        />
        <input
          type="text"
          placeholder="Role"
          value={newCustomer.role || ""}
          onChange={(e) => setNewCustomer({ ...newCustomer, role: e.target.value })}
          className="border p-1 mr-2"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
        >
          Add Customer
        </button>
      </div>

      {/* Customers Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">First Name</th>
            <th className="border px-4 py-2">Last Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customersData?.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{customer.id}</td>
              <td className="border px-4 py-2">
                {editingId === customer.id ? (
                  <input
                    type="text"
                    value={editData.first_name || ""}
                    onChange={(e) => setEditData({ ...editData, first_name: e.target.value })}
                    placeholder="First Name"
                    className="border p-1"
                  />
                ) : (
                  customer.first_name
                )}
              </td>
              <td className="border px-4 py-2">
                {editingId === customer.id ? (
                  <input
                    type="text"
                    value={editData.last_name || ""}
                    onChange={(e) => setEditData({ ...editData, last_name: e.target.value })}
                    placeholder="Last Name"
                    className="border p-1"
                  />
                ) : (
                  customer.last_name
                )}
              </td>
              <td className="border px-4 py-2">
                {editingId === customer.id ? (
                  <input
                    type="email"
                    value={editData.email || ""}
                    onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                    placeholder="Email"
                    className="border p-1"
                  />
                ) : (
                  customer.email
                )}
              </td>
              <td className="border px-4 py-2">
                {editingId === customer.id ? (
                  <input
                    type="text"
                    value={editData.phone_no || ""}
                    onChange={(e) => setEditData({ ...editData, phone_no: e.target.value })}
                    placeholder="Phone"
                    className="border p-1"
                  />
                ) : (
                  customer.phone_no
                )}
              </td>
              <td className="border px-4 py-2">
                {editingId === customer.id ? (
                  <input
                    type="text"
                    value={editData.role || ""}
                    onChange={(e) => setEditData({ ...editData, role: e.target.value })}
                    placeholder="Role"
                    className="border p-1"
                  />
                ) : (
                  customer.role
                )}
              </td>
              <td className="border px-4 py-2 space-x-2">
                {editingId === customer.id ? (
                  <button
                    onClick={handleUpdate}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(customer)}
                    className="bg-yellow-400 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDelete(customer.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {customersData?.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center py-4">
                No customers found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
