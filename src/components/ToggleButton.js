/**
 * @param {{ onClick: () => void, children: React.ReactNode }} props
 */
export default function ToggleButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="block mx-auto mb-8 px-6 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      {children}
    </button>
  );
} 