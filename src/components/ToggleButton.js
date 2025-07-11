import React, { useState } from 'react';

const ToggleButton = ({ onToggle, initial = 'Show' }) => {
  const [selected, setSelected] = useState(initial);

  const handleToggle = (option) => {
    setSelected(option);
    if (onToggle) onToggle(option);
  };

  return (
    <div className="flex items-center justify-center min-h-[60px]">
      <div className="flex bg-white border border-gray-300 rounded-full overflow-hidden shadow-sm">
        <button
          className={`px-6 py-2 focus:outline-none transition-colors duration-200 ${
            selected === 'Show'
              ? 'bg-teal-500 text-white'
              : 'bg-white text-black'
          } rounded-full`}
          onClick={() => handleToggle('Show')}
        >
          Show
        </button>
        <button
          className={`px-6 py-2 focus:outline-none transition-colors duration-200 ${
            selected === 'Hide'
              ? 'bg-teal-500 text-white'
              : 'bg-white text-black'
          } rounded-full`}
          onClick={() => handleToggle('Hide')}
        >
          Hide
        </button>
      </div>
    </div>
  );
};

export default ToggleButton; 