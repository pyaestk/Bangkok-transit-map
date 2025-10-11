import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function FiltersCard() {
  return (
    <div className="p-4 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 shadow-lg w-80 text-white">
      <h2 className="text-lg font-bold mb-4 mx-1">Filters</h2>

      {/* Lines */}
      <label className="block my-4 mx-1">Lines</label>
      <select className="w-full px-3 py-2 rounded-lg bg-black/30 border border-white/10 focus:outline-none text-sm">
        <option>All</option>
        <option>Blue</option>
        <option>Red</option>
        <option>Yellow</option>
      </select>

      {/* Search station */}
      <label className="block my-4 mx-1">Search station</label>
      <input
        type="text"
        placeholder="Type a station…"
        className="w-full text-sm px-3 py-2 rounded-lg bg-black/30 border border-white/10 placeholder-gray-400 focus:outline-none"
      />

      {/* Buttons */}
      <div className="flex flex-col space-y-4 mt-4">
        <button className="px-4 py-2 rounded-lg bg-[#151922] text-white hover:bg-white/10">
          Apply
        </button>
        <button className="px-4 py-2 rounded-lg bg-[#151922] text-white hover:bg-white/10">
          Show In Planner
        </button>
      </div>

      {/* Line Pills */}
      <div className="flex flex-wrap gap-2 mt-6 mb-4 text-sm">
        <span className="flex items-center px-3 py-1 rounded-full bg-white/10">
          <span className="w-4 h-2 rounded-full bg-blue-500 mr-2"></span>
          Blue
        </span>
        <span className="flex items-center px-3 py-1 rounded-full bg-white/10">
          <span className="w-4 h-2 rounded-full bg-green-500 mr-2"></span>
          Sukhumvit
        </span>
        <span className="flex items-center px-3 py-1 rounded-full bg-white/10">
          <span className="w-4 h-2 rounded-full bg-green-700 mr-2"></span>
          Silom
        </span>
        <span className="flex items-center px-3 py-1 rounded-full bg-white/10">
          <span className="w-4 h-2 rounded-full bg-red-500 mr-2"></span> Red
        </span>
        <span className="flex items-center px-3 py-1 rounded-full bg-white/10">
          <span className="w-4 h-2 rounded-full bg-yellow-500 mr-2"></span>{" "}
          Yellow
        </span>
        <span className="flex items-center px-3 py-1 rounded-full bg-white/10">
          <span className="w-4 h-2 rounded-full bg-pink-400 mr-2"></span> Pink
        </span>
      </div>
    </div>
  );
}


export default function LinesDropdown() {
  return (
    <div className="my-4 mx-1">
      <label className="block mb-2">Lines</label>

      <Menu as="div" className="relative w-full">
        <MenuButton className="inline-flex w-full justify-between rounded-lg bg-black/30 px-3 py-2 text-sm text-white border border-white/10 hover:bg-white/10 focus:outline-none">
          All
          <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
        </MenuButton>

        <MenuItems
          transition
          className="absolute left-0 z-10 mt-2 w-full origin-top rounded-md bg-gray-800 border border-white/10 shadow-lg focus:outline-none
          data-closed:scale-95 data-closed:opacity-0 data-closed:transform 
          data-enter:duration-100 data-enter:ease-out 
          data-leave:duration-75 data-leave:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              {({ focus }) => (
                <button
                  className={`block w-full px-4 py-2 text-left text-sm ${
                    focus ? 'bg-white/5 text-white' : 'text-gray-300'
                  }`}
                >
                  All
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <button
                  className={`block w-full px-4 py-2 text-left text-sm ${
                    focus ? 'bg-white/5 text-white' : 'text-gray-300'
                  }`}
                >
                  Blue
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <button
                  className={`block w-full px-4 py-2 text-left text-sm ${
                    focus ? 'bg-white/5 text-white' : 'text-gray-300'
                  }`}
                >
                  Red
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <button
                  className={`block w-full px-4 py-2 text-left text-sm ${
                    focus ? 'bg-white/5 text-white' : 'text-gray-300'
                  }`}
                >
                  Yellow
                </button>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  )
}

