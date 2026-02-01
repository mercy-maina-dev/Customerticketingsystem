
import { Outlet } from "react-router-dom";
import { AgentDrawer } from "../aside/AgentDrawer";

export default function AgentsDashboard() {
  return (
    <div className="flex min-h-screen">
    
      <aside className="w-64 bg-gray-800 text-white p-4">
        <AgentDrawer />
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        
        <Outlet />
      </main>
    </div>
  );
}
