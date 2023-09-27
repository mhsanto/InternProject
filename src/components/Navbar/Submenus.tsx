import { IconType } from "react-icons";

type ExtraProps = {
  title: string;
  names: string[];
  icon:IconType
};
type SubmenuProps = {
  menu: {
    extras: ExtraProps;
    id: string;
    name: string;
    icon: React.ReactNode ;
    icon2: React.ReactNode ;
  };
};
const Submenus = ({ menu }: SubmenuProps) => {
  console.log(menu);
  return (
    <>
      <li className="hover:bg-slate-700 hover:text-white py-1  px-2 capitalize cursor-pointer font-normal relative text-lg flex items-center gap-2 border-b">
        {menu.icon} {menu.name} {menu.icon2}
        <ul className="absolute top-0 bg-white text-black right-0 hover:bg-slate-700/80 hover:text-white">
          <li className="py-1 text-lg px-3 flex items-center">
            {menu.extras ? (
              <>
                {menu.extras.title} {menu.extras.icon}
              </>
            ) : null}

            <ul className="absolute bg-white text-black flex flex-col  items-center justify-center w-full gap-2 top-full right-full  ">
              {menu.extras &&
                menu.extras.names.map((name) => (
                  <li className="hover:bg-slate-700/80 text-lg px-3 flex-grow w-full">
                    {name}
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </li>
    </>
  );
};

export default Submenus;
