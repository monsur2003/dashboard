import React, { useState } from "react";
import Link from "../Link/Link";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/about", name: "About" },
    { id: 5, path: "/portfolio", name: "Portfolio" },
  ];


  return (
    <nav>
      <div onClick={() => { setOpen(!open) }} className="md:hidden bg-blue-500">
        <span className="cursor-pointer">
          {
            open === true ? <XMarkIcon className="w-8 h-8 font-bold text-gray-500" ></XMarkIcon> : <Bars3Icon className="w-8 h-8 font-bold text-gray-500"></Bars3Icon>
          }
        </span>
      </div>
      <ul className={`md:flex absolute text-center md:static bg-blue-500 py-4 px-5 duration-1000  ${open ? 'top-7' : '-top-36'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>

    </nav>
  );
};

export default Navbar;
