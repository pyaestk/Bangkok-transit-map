import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  const baseClasses =
    "px-3 py-2 rounded-xl text-sm border border-transparent block text-center";
  const inactiveClasses = "text-white transition-colors";
  const activeClasses = "bg-[#151922] border border-solid border-[#232838] rounded-[10px] text-white ";

  const links = [
    { to: "/", label: "Home" },
    { to: "/map", label: "Map" },
    { to: "/routes", label: "Routes" },
    { to: "/stations", label: "Stations" },
    { to: "/fares", label: "Fares" },
    { to: "/planner", label: "Planner" },
    { to: "/alerts", label: "Alerts" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0e1116cc] border-b border-[#232838] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side (Logo / Brand) */}
          <div className="flex-shrink-0 text-white text-xl">
            Bangkok Transit
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-5">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger / X icon */}
              <svg
                className={`h-6 w-6 ${open ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M3 12h18M3 18h18"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${open ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, shown when open is true */}
      <div className={`md:hidden ${open ? "block" : "hidden"} `}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
