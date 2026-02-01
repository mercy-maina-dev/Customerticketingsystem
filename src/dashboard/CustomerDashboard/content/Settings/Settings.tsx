import { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      <div className="bg-white p-4 shadow rounded max-w-md">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span>Enable Dark Mode</span>
        </label>
      </div>
    </div>
  );
}
