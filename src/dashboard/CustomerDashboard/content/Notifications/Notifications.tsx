export default function Notifications() {
  const notifications = [
    { id: 1, message: "Your ticket #101 has been updated." },
    { id: 2, message: "New feature added to dashboard." },
  ];

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>

      {notifications.map((note) => (
        <div
          key={note.id}
          className="bg-gray-100 p-3 rounded shadow mb-2"
        >
          {note.message}
        </div>
      ))}
    </div>
  );
}
