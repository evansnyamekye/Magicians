/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-slate-900 text-white">
      <nav className="navbar my-5 shadow-lg">
        <div className="container flex justify-between mx-auto px-4 md:px-10">
          <h1>Math Magicians</h1>
          <ul className="flex gap-5">
            <Link to="/">Home</Link>
            <Link to="/calculator">Calculator</Link>
            <Link to="/quote">Quote</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
