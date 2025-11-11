import React from 'react';
import CardNav from './components/CardNav';
export default function App() {
  return (
   <>
    <CardNav/>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Tailwind + React ✅</h1>
      <button className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
        Click Me
      </button>
    </div></>
  );
}
