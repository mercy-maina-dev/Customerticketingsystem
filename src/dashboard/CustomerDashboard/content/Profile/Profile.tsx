import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store";

export default function Profile() {
  const user = useSelector((state: RootState) => state.customer.customer);

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      <div className="bg-white shadow p-4 rounded max-w-md">
        <p><strong>Name:</strong> {user?.firstname} {user?.lastname}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Phone:</strong> {user?.phone_number}</p>
        <p><strong>Role:</strong> {user?.role}</p>
      </div>
    </div>
  );
}
