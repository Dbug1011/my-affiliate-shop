"use client"

import { useState } from "react"

export default function DropdownButton({ label, options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-4 py-3 bg-black border-3 border-techy text-techy hover:bg-techy hover:text-black transition-all duration-200 min-w-[200px] font-pixel text-xs"
      >
        <span className="uppercase">{label}</span>
        <div className="ml-2">
          <div
            className={`w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-techy transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-black border-3 border-techy z-10 min-w-full">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                onSelect(option)
                setIsOpen(false)
              }}
              className={`block w-full text-left px-4 py-3 text-techy hover:bg-techy hover:text-black transition-all duration-200 border-b border-techy last:border-b-0 font-pixel text-xs ${
                option === label ? "bg-techy bg-opacity-20 text-techy" : ""
              }`}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
