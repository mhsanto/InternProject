import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { navItems } from "./navitems";
const DropdownMenu = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const toggleSubmenu = (navItemName: string) => {
    setDropdownOpen((prevDropdownOpen) => {
      const updatedDropdownOpen = {};

      // Close all submenus
      Object.keys(prevDropdownOpen).forEach((itemName) => {
        updatedDropdownOpen[itemName] = false;
      });

      // Toggle the submenu you clicked on
      updatedDropdownOpen[navItemName] = !prevDropdownOpen[navItemName];

      return updatedDropdownOpen;
    });
  };

  return (
    <>
      <nav className="bg-white text-black shadow-md fixed w-screen z-50">
        <div className="container flex flex-wrap px-4 py-2 mx-auto lg:space-x-4">
          <a
            href="/"
            className="inline-flex p-2 text-xl font-bold tracking-wider uppercase"
          >
            SlashIT
          </a>
          <button
            className="inline-flex items-center justify-center w-10 h-10 ml-auto border rounded-md outline-none lg:hidden focus:outline-none"
            onClick={toggleNavbar}
          >
            <FaHamburger />
          </button>
          <div
            className={`w-full mt-2 lg:inline-flex lg:w-auto lg:mt-0 ${
              navbarOpen ? "flex" : "hidden"
            }`}
          >
            <ul className="flex flex-col w-full space-y-2 lg:w-auto lg:flex-row lg:space-y-0 lg:space-x-2">
              {navItems.map((navItem) => (
                <li className="relative" key={navItem.name}>
                  {navItem.submenu ? (
                    <>
                      <button
                        className="flex w-full px-4 py-2 font-medium rounded-md outline-none focus:outline-none hover:bg-slate-400"
                        onClick={() => toggleSubmenu(navItem.name)}
                      >
                        {navItem.name}
                      </button>
                      <div
                        className={`left-3 top-full p-2 mt-1 bg-white rounded-md shadow lg:absolute ${
                          dropdownOpen[navItem.name]
                            ? "flex flex-col"
                            : "hidden"
                        }`}
                      >
                        <ul className="space-y-2 w-full lg:w-80 lg:flex lg:flex-wrap grid grid-cols-2 text-center md:grid-cols-3 justify-between items-center">
                          {navItem.submenu.map((menu) => (
                            <li key={menu.name}>
                              <a
                                href={navItem.href}
                                className="flex items-center  gap-2 p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black w-max"
                              >
                                {menu.icon}
                                {menu.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <li>
                      <a
                        href={navItem.href}
                        className="flex px-4 py-2 font-medium rounded-md hover:bg-gray-100"
                      >
                        {navItem.name}
                      </a>
                    </li>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DropdownMenu;
