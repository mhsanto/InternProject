import { useState } from "react";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoMongodb,BiLocationPlus
} from "react-icons/bi";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { BsFacebook,BsGithub,BsLinkedin ,BSLocatio} from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
interface NavItem {
  id: string;
  name: string;
  type: string;
  href: string;
  submenu?: SubmenuItem[];
}

interface SubmenuItem {
  id: string;
  name: string;
  icon: React.ReactNode; // Assuming icons are React components
}

const navItems:NavItem[]= [
  {
    id: crypto.randomUUID(),
    name: "HOME",
    type: "list",
    href: "/",
  },
  {
    id: crypto.randomUUID(),
    name: "SKILLS",
    type: "list",
    href: "",
    submenu: [
      {
        id: crypto.randomUUID(),
        name: "CSS",
        icon: <BiLogoCss3 size={22} />,
      },
      {
        id: crypto.randomUUID(),
        name: "Javascript",
        icon: <BiLogoJavascript size={22} />,
      },
      {
        id: crypto.randomUUID(),
        name: "React",
        icon: <BiLogoReact size={22} />,
      },
      {
        id: crypto.randomUUID(),
        name: "Next",
        icon: <TbBrandNextjs size={22} />,
      },
      {
        id: crypto.randomUUID(),
        name: "Node",
        icon: <BiLogoNodejs size={22} />,
      },
      {
        id: crypto.randomUUID(),
        name: "Mongo",
        icon: <BiLogoMongodb size={22} />,
      },
      {
        id: crypto.randomUUID(),
        name: "Express",
        icon: <SiExpress size={22} />,
      },
      {
        id: crypto.randomUUID(),
        name: "Prisma",
        icon: <AiOutlineConsoleSql size={22} />,
      },
      {
        id: crypto.randomUUID(),
        name: "Tailwind",
        icon: <BiLogoTailwindCss size={22} />,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "LOCATION",
    type: "list",
    href: "",
    submenu: [
      {
        id: crypto.randomUUID(),
        name: "Gacha Road,Borobari,Gazipur-1703",
        icon: <BiLocationPlus  size={22} />,
      },
   
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "SOCIALS",
    type: "list",
    href: "/",
    submenu: [
      {
        id: crypto.randomUUID(),
        name: "Facebook",
        icon: <BsFacebook size={22} />,
      },
      {
        id: crypto.randomUUID(),
        name: "Github",
        icon: <BsGithub size={22} />,
      },
      {
        id: crypto.randomUUID(),
        name: "Linkedin",
        icon: <BsLinkedin size={22} />,
      },
   
    ],
  },
];
const DropdownMenu = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const toggleSubmenu = (navItemName: string) => {
    setDropdownOpen((prevDropdownOpen) => ({
      ...prevDropdownOpen,
      [navItemName]: !prevDropdownOpen[navItemName],
    }));
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
                        <ul className="space-y-2 w-full lg:w-80 lg:flex lg:flex-wrap grid grid-cols-2 text-center md:grid-cols-3 justify-between items-center gap-3">
                          {navItem.submenu.map((menu) => (
                            <li key={menu.name} >
                              <a
                                href={navItem.href}
                                className="flex items-center gap-2 p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black"
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
