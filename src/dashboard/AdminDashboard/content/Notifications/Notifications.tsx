// src/dashboard/AdminDashboard/content/Notifications/Notifications.tsx
import { useState } from "react";
import { MdDeleteForever, MdMarkEmailRead } from "react-icons/md";

type Notification = {
  id: number;
  title: string;
  message: string;
  read: boolean;
  created_at: string;
};

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, title: "New Ticket Assigned", message: "Ticket #101 assigned to you", read: false, created_at: "2025-12-11T08:30:00" },
    { id: 2, title: "Ticket Resolved", message: "Ticket #99 has been resolved", read: true, created_at: "2025-12-10T15:20:00" },
    { id: 3, title: "System Alert", message: "Server maintenance at 10 PM", read: false, created_at: "2025-12-11T07:50:00" },
  ]);

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>

      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <ul className="space-y-2">
          {notifications.map(n => (
            <li
              key={n.id}
              className={`flex justify-between items-center p-3 rounded-lg border ${
                n.read ? "bg-gray-100" : "bg-blue-100"
              }`}
            >
              <div>
                <p className="font-semibold">{n.title}</p>
                <p className="text-sm">{n.message}</p>
                <p className="text-xs text-gray-500">
                  {new Date(n.created_at).toLocaleString()}
                </p>
              </div>
              <div className="flex gap-2">
                {!n.read && (
                  <button
                    onClick={() => markAsRead(n.id)}
                    className="btn btn-sm btn-success"
                  >
                    <MdMarkEmailRead size={20} />
                  </button>
                )}
                <button
                  onClick={() => deleteNotification(n.id)}
                  className="btn btn-sm btn-error text-red-500"
                >
                  <MdDeleteForever size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
