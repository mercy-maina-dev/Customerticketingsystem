// src/dashboard/AdminDashboard/content/Analytics/Analytics.tsx
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  LabelList,
} from "recharts";

export default function Analytics() {
  const [data, setData] = useState([
    { name: "Tickets Open", value: 45, color: "#f87171" },
    { name: "Tickets In Progress", value: 30, color: "#fbbf24" },
    { name: "Tickets Resolved", value: 25, color: "#34d399" },
  ]);

  // Simulate data update every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev =>
        prev.map(d => ({
          ...d,
          value: Math.floor(Math.random() * 50) + 10,
        }))
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">Ticket Analytics</h1>
      <div className="w-full h-[calc(100%-80px)] bg-white rounded shadow p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 16, fill: "#4b5563" }} />
            <YAxis tick={{ fontSize: 16, fill: "#4b5563" }} />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="value" fill="#3b82f6">
              {data.map((entry, index) => (
                <LabelList
                  key={index}
                  dataKey="value"
                  position="top"
                  formatter={(val) => `${val}`}
                  fill={entry.color}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
