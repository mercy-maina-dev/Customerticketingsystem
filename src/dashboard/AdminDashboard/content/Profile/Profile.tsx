// src/dashboard/AdminDashboard/content/Profile/Profile.tsx
import { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@example.com",
    phone: "+254700000000",
    role: "Administrator",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      <div className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1">Role</label>
          <input
            type="text"
            name="role"
            value={profile.role}
            disabled
            className="input input-bordered w-full bg-gray-200 cursor-not-allowed"
          />
        </div>

        <button className="btn btn-primary mt-2" onClick={handleSave}>
          Save Profile
        </button>
      </div>
    </div>
  );
}
