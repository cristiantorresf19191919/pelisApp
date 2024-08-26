import React from "react";

export const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-2 py-4">
      <a href="/" className="text-3xl">
        PELICULAS
      </a>
      <div>
        <ul className="flex text-xl">
          <li>Home</li>
          <li className="px-10">Movies</li>
          <li>Tv Show</li>
        </ul>
      </div>
    </div>
  );
};
