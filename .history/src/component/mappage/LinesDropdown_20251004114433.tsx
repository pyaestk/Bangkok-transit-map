import { useState } from "react"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

export default function LinesDropdown({ onSelect }) {
  const [selected, setSelected] = useState("All")
  const options = ["All", "Blue", "Red", "Yellow"]

  const handleSelect = (option) => {
    setSelected(option)          // update local state
    if (onSelect) onSelect(option) // call parent callback
  }

  return (
    <div className="my-4">
      <Menu as="div" className="relative w-full">
        <MenuButton className="inline-flex w-full justify-between rounded-lg bg-black/30 px-3 py-2 text-sm text-white border border-white/10 hover:bg-white/10 focus:outline-none">
          {selected}
          <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
        </MenuButton>

        <MenuItems
          transition
          className="absolute left-0 z-10 mt-2 w-full origin-top rounded-md bg-gray-800 border border-white/10 shadow-lg focus:outline-none"
        >
          <div className="py-1">
            {options.map((option) => (
              <MenuItem key={option}>
                {({ focus }) => (
                  <button
                    onClick={() => handleSelect(option)}
                    className={`block w-full px-4 py-2 text-left text-sm ${
                      focus ? "bg-white/5 text-white" : "text-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  )
}
