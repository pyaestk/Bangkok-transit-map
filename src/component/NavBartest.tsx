import { NavLink } from "react-router-dom"

function NavBar() {
  const baseClasses = "px-3 py-2 rounded-md text-sm font-medium"
  const inactiveClasses = "text-white hover:text-yellow-300 transition-colors"
  const activeClasses = "bg-blue-800 text-yellow-300"

  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-8 h-16">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/map"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            Map
          </NavLink>
          <NavLink
            to="/planner"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            Planner
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
