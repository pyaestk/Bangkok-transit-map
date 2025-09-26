import { NavLink } from "react-router-dom"

function NavBar() {
  const baseClasses = "px-3 py-2 rounded-xl text-sm border border-transparent"
  const inactiveClasses = "text-white transition-colors"
  const activeClasses = "bg-gray-900 text-white border border-white/10"

  return (
    <nav className="dark:bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side (Logo / Brand) */}
          <div className="flex-shrink-0 text-white text-xl">
            Bangkok Transit
          </div>

          {/* Right side (Links) */}
          <div className="flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/routes"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              Routes
            </NavLink>
            <NavLink
              to="/stations"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              Stations
            </NavLink>
            <NavLink
              to="/fares"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              Fares
            </NavLink>
            <NavLink
              to="/planner"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              Planner
            </NavLink>
            <NavLink
              to="/alerts"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              Alerts
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
