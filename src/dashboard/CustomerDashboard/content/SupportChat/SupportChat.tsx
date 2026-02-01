import { useState } from "react";

export default function SupportChat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;
    setMessages([...messages, text]);
    setText("");
  };

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Support Chat</h1>

      <div className="bg-white p-4 shadow h-80 rounded overflow-y-auto mb-4">
        {messages.map((msg, i) => (
          <p key={i} className="bg-gray-200 p-2 my-1 rounded">{msg}</p>
        ))}
      </div>

      <div className="flex space-x-2">
        <input
          className="border p-2 flex-1 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
