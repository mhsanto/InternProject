import { useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import Submenus from "./Submenus";
import { BiLogoCss3, BiLogoJavascript } from "react-icons/bi";
import { AiOutlineConsoleSql, AiOutlineRight } from "react-icons/ai";
import Navbutton from "./Navbutton";
const navItems = [
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
        icon: <BiLogoCss3 size={25} />,
        icon2: <AiOutlineRight />,
        extras: {
          title: "Frameworks",
          icon: <BsArrowDownShort size={25} />,
          names: ["Tailwind", "Bootstrap", "Material"],
        },
      },
      {
        id: crypto.randomUUID(),
        name: "Javascript",
        icon: <BiLogoJavascript size={25} />,
        icon2: <AiOutlineRight />,
        extras: {
          title: "Frameworks",
          icon: <BsArrowDownShort size={25} />,
          names: ["Angular", "Next", "Vue"],
        },
      },
      {
        id: crypto.randomUUID(),
        name: "Backend",
        icon: <AiOutlineConsoleSql size={25} />,
        icon2: <AiOutlineRight />,
        extras: {
          title: "Frameworks",
          icon: <BsArrowDownShort size={25} />,
          names: ["Next", "Node", "Express"],
        },
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "LOCATION",
    type: "list",
    href: "/",
  },
  {
    id: crypto.randomUUID(),
    name: "SOCIALS",
    type: "list",
    href: "/",
  },
];
const DropdownMenu = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="bg-white  dark:border-gray-700 py-4 fixed h-50 w-screen z-50 px-4">
        <header className="max-w-screen-xl flex justify-between items-center mx-auto">
          <h3 className="text-2xl font-medium">SLASHIT</h3>
          {/* <Navbutton /> */}
          <ul className="flex gap-7 pr-24 hidden md:flex">
            {navItems.map((navItem) => (
              <>
                {navItem.submenu ? (
                  <div key={navItem.id} className="relative">
                    <li
                      className="flex items-center font-medium cursor-pointer select-none group "
                      onClick={() => setShow(!show)}
                    >
                      {navItem.name}
                      <BsArrowDownShort className="group-hover:rotate-180 transition duration-200" />
                    </li>
                    {show && (
                      <ul className="absolute  top-10 bg-white flex flex-col gap-2">
                        {navItem.submenu.map((menu) => (
                          <Submenus menu={menu} />
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <li key={navItem.id} className="font-medium cursor-pointer">
                    {navItem.name}
                  </li>
                )}
              </>
            ))}
          </ul>
        </header>
      </nav>
      {/* <div className="group inline-block mt-[5rem]">
        <button className="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
          Skills
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180
      transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul
          className="bg-white border rounded-lg transform scale-0 group-hover:scale-100 absolute 
transition duration-150 ease-in-out origin-top min-w-32"
        >
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
            Programming
          </li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
          <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
            <button className="w-full text-left flex items-center outline-none focus:outline-none">
              <span className="pr-1 flex-1">Langauges</span>
              <span className="mr-auto">
                <svg
                  className="fill-current h-4 w-4
          transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <ul
              id="menu-lang"
              className="bg-white border rounded-sm absolute top-0 right-0 
transition duration-150 ease-in-out origin-top-left
min-w-32
"
            >
              <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
              <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                <button
                  aria-haspopup="true"
                  aria-controls="menu-lang-python"
                  className="w-full text-left flex items-center outline-none focus:outline-none"
                >
                  <span className="pr-1 flex-1">Python</span>
                  <span className="mr-auto">
                    <svg
                      className="fill-current h-4 w-4
              transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  id="menu-lang-python"
                  aria-hidden="true"
                  className="bg-white border rounded-sm absolute top-0 right-0 
    transition duration-150 ease-in-out origin-top-left
    min-w-32
    "
                >
                  <li className="px-3 py-1 hover:bg-gray-100">2.7</li>
                  <li className="px-3 py-1 hover:bg-gray-100">3+</li>
                </ul>
              </li>
              <li className="px-3 py-1 hover:bg-gray-100">Go</li>
              <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
            </ul>
          </li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
        </ul>
      </div> */}
    </>
  );
};
{/* <ul className="flex gap-7 pr-24 hidden md:flex">
{navItems.map((navItem) => (
  <>
    {navItem.submenu ? (
      <div key={navItem.id} className="relative">
        <li
          className="flex items-center font-medium cursor-pointer select-none group "
          onClick={() => setShow(!show)}
        >
          {navItem.name}
          <BsArrowDownShort className="group-hover:rotate-180 transition duration-200" />
        </li>
        {show && (
          <ul className="absolute  top-10 bg-white flex flex-col gap-2">
            {navItem.submenu.map((menu) => (
              <Submenus menu={menu} />
            ))}
          </ul>
        )}
      </div>
    ) : (
      <li key={navItem.id} className="font-medium cursor-pointer">
        {navItem.name}
      </li>
    )}
  </>
))}
</ul> */}
export default DropdownMenu;
