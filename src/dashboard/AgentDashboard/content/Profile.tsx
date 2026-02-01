import { useState } from "react";

export default function Profile() {

  const [agent, setAgent] = useState({
    name: "John Doe",
    email: "john@example.com",
    role: "Agent",
    avatar: "", 
  });

  const [editing, setEditing] = useState(false);

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAgent((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setAgent((prev) => ({ ...prev, avatar: ev.target?.result as string }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>

      
      <div className="mb-4 flex flex-col items-center">
        <img
          src={agent.avatar || "https://via.placeholder.com/100"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mb-2"
        />
        {editing && (
          <input type="file" accept="image/*" onChange={handleImageChange} />
        )}
      </div>

      <div className="space-y-3">
        <div>
          <label className="block font-semibold">Name:</label>
          {editing ? (
            <input
              type="text"
              name="name"
              value={agent.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          ) : (
            <p>{agent.name}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Email:</label>
          {editing ? (
            <input
              type="email"
              name="email"
              value={agent.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          ) : (
            <p>{agent.email}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Role:</label>
          {editing ? (
            <input
              type="text"
              name="role"
              value={agent.role}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          ) : (
            <p>{agent.role}</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={() => setEditing(!editing)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {editing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
}
