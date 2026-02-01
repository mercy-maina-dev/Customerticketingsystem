
import { Link } from "react-router-dom";
import { agentDrawerData } from "./drawerData";

export const AgentDrawer = () => {
  return (
    <div>
      <h2 className="text-white font-bold text-xl mb-4">
        Agents Menu
      </h2>
      <ul>
        {agentDrawerData.map((item) => (
          <li key={item.id}>
            <Link
              to={item.link}
              className="flex space-x-3 border-b-2 border-transparent hover:border-blue-400 text-white hover:bg-gray-700 p-4"
            >
              <span className="text-xl text-gray-100 mb-2">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
