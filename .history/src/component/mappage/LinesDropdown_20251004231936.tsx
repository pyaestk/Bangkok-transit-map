import { useState } from "react"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

interface LinesDropdownProps {
  onChange: (value: string) => void
}

export default function LinesDropdown({ onChange }: LinesDropdownProps) {
  const [selected, setSelected] = useState("All")

  const options = ["All", "Blue", "Sukhumvit", "Silom", "Red", "Yellow", "Pink"]

  const handleSelect = (option: string) => {
    setSelected(option)
    onChange(option) // notify parent
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
          className="absolute left-0 z-10 mt-2 w-full origin-top rounded-md bg-black/30 border border-white/10 shadow-lg focus:outline-none
            data-closed:scale-95 data-closed:opacity-0 data-closed:transform 
            data-enter:duration-100 data-enter:ease-out 
            data-leave:duration-75 data-leave:ease-in"
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
