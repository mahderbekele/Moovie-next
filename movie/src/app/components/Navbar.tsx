import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 px-6 py-4 flex items-center justify-between">
      <div className="text-yellow-400 font-extrabold text-2xl">Moovie</div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="rounded px-3 py-1 text-black"
        />
        <a href="#" className="text-yellow-400 font-semibold hover:underline">
          Home
        </a>
        <a href="#" className="text-gray-400 hover:text-yellow-400">
          My List
        </a>
        <a href="/signin" className="bg-yellow-500 text-black px-4 py-1 rounded font-semibold hover:bg-yellow-600">
          Sign in
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
