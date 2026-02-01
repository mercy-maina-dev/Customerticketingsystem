import { Outlet } from "react-router-dom"
import Navbar from "../../../components/Navbar/Navbar"
import { AdminDrawer } from "../aside/AdminDrawer"
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";



const AdminDashboard = () => {
   const [drawerOpen, setDrawerOpen] = useState(false);
     const handleDrawerToggle = () => {
        setDrawerOpen((prev) => !prev)
    }

  return (
    <div >
      <div className="flex px-4 py-4 bg-gray-700 items-center" >

        <button className="mr-4 text-white text-2xl lg:hidden" onClick={handleDrawerToggle}>

          {drawerOpen ? <IoCloseSharp />:<FaBars/>}


        </button>
           <span className="text-white text-lg font-semibold">
                    Welcome to your Admin dashboard
                </span>
      </div>
      
      <div className="flex">
     <aside
  className={`
    fixed top-0 z-40 w-64 bg-gray-600 pt-16
    ${drawerOpen ? '' : "hidden"}
    lg:static lg:block lg:w-64 lg:pt-0
  `}
  style={{ minHeight: "100vh" }}
>

          <div>
          <button
  className="absolute top-4 right-4 text-white text-4xl lg:hidden"
  onClick={handleDrawerToggle}
  aria-label="Open drawer"
  title="Open drawer"
>
  <FaBars />
</button>

            <AdminDrawer/>
          </div>
          

        </aside>

      
        <main  className="p-0 m-0">
          <Outlet/> 
        </main>
        </div>
    </div>
  )
}

export default AdminDashboard