import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "./app/store";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import { Register } from "./components/Register/Register";
import Login from "./components/Login/Login";
import { Verification } from "./components/Verification/Verification";
import { Toaster } from "sonner";

// Admin dashboard imports
import AdminDashboard from "./dashboard/AdminDashboard/content/AdminDashboard";
import Tickets from "./dashboard/AdminDashboard/content/Tickets/Tickets";
import Customers from "./dashboard/AdminDashboard/content/Customers/customers";
import Agents from "./dashboard/AdminDashboard/content/Agents/Agents";
import AdminProfile from "./dashboard/AdminDashboard/content/Profile/Profile";
import Analytics from "./dashboard/AdminDashboard/content/Analytics/Analytics";
import AdminNotifications from "./dashboard/AdminDashboard/content/Notifications/Notifications";

// Customer dashboard 
import CustomerDashboard from "./dashboard/CustomerDashboard/content/CustomerDashboard";
import MyTickets from "./dashboard/CustomerDashboard/content/MyTickets/MyTickets";
import CreateTicket from "./dashboard/CustomerDashboard/content/CreateTicket/CreateTicket";
import Knowledgebase from "./dashboard/CustomerDashboard/content/Knowledgebase/Knowledgebase";
import CustomerProfile from "./dashboard/CustomerDashboard/content/Profile/Profile";
import CustomerNotifications from "./dashboard/CustomerDashboard/content/Notifications/Notifications";
import Settings from "./dashboard/CustomerDashboard/content/Settings/Settings";
import SupportChat from "./dashboard/CustomerDashboard/content/SupportChat/SupportChat";

// Agent dashboard 
import AgentsDashboard from "./dashboard/AgentDashboard/content/AgentsDashboard";
import Stats from "./dashboard/AgentDashboard/content/Stats";
import AgentMyTickets from "./dashboard/AgentDashboard/content/AgentMyTickets";
import Profile from "./dashboard/AgentDashboard/content/Profile";


function AppContent() {
  const isAdmin = useSelector((state: RootState) => state.customer.customer?.role === "admin");
  const isCustomer = useSelector((state: RootState) => state.customer.customer?.role === "customer");
  const isAgent = useSelector((state: RootState) => state.customer.customer?.role === "agent");
  const location = useLocation();

  const hideFooter =
    location.pathname.startsWith("/admin/dashboard") ||
    location.pathname.startsWith("/customer/dashboard") ||
    location.pathname.startsWith("/agent/dashboard");

  return (
    <>
      <Navbar />
      <Toaster position="top-right" richColors />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verification />} />

        <Route path="/admin/dashboard/*" element={isAdmin ? <AdminDashboard /> : <Login />}>
          {isAdmin && (
            <>
              <Route path="tickets" element={<Tickets />} />
              <Route path="customers" element={<Customers />} />
              <Route path="agents" element={<Agents />} />
              <Route path="profile" element={<AdminProfile />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="notifications" element={<AdminNotifications />} />
            </>
          )}
        </Route>

        {/* Customer dashboard routes */}
        <Route path="/customer/dashboard/*" element={isCustomer ? <CustomerDashboard /> : <Login />}>
          {isCustomer && (
            <>
              <Route path="my-tickets" element={<MyTickets />} />
              <Route path="new-ticket" element={<CreateTicket />} />
              <Route path="knowledge-base" element={<Knowledgebase />} />
              <Route path="profile" element={<CustomerProfile />} />
              <Route path="notifications" element={<CustomerNotifications />} />
              <Route path="settings" element={<Settings />} />
              <Route path="support-chat" element={<SupportChat />} />
            </>
          )}
        </Route>

        {/* Agent dashboard routes */}
        <Route path="/agent/dashboard/*" element={isAgent ? <AgentsDashboard /> : <Login />}>
          {isAgent && (
            <>
              <Route path="stats" element={<Stats/>} />
              <Route path="my-tickets" element={<AgentMyTickets/>} />
              <Route path="profile" element={<Profile />} />
            </>
          )}
        </Route>
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
