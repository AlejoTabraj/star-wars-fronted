import { SearchBarProps } from "@/types/appTypes";
import { useState } from "react";

export default function SearchBar({ setKeyWord }: SearchBarProps) {
    const [ valueInput, setValueInput ] = useState<string>('');
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.value.trim()) {
        setValueInput(e.target.value.trim());
      }
    }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setKeyWord(valueInput)
    }
    return (
      <div className="flex items-center text-black mb-6">
        <input
          type="text"
          placeholder="Search by name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleInput}
        />
        <button onClick={handleSubmit} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Filter
        </button>
      </div>
    );
  }