import Submenus from "./Submenus";

type SubMenuProps = {
  id: unknown;
  name: string;
  frameworks: {
    title: string;
    names: string[];
  };
};

type NavLinksProps = {
  navItem: {
    id: unknown;
    name: string;
    type: string;
    href: string;
    submenu?: SubMenuProps[];
  };
};
const Navlinks: React.FC<NavLinksProps> = ({ navItem }) => {

  return (
    <>
      {navItem.submenu ? (
        <>
          <button type="button" className="relative">{navItem.name}</button>
        </>
      ) : (
        <li
          role="button"
          className="hover:text-slate-700 font-medium transition duration-250ms list-none"
        >
          <a href={navItem.href}>{navItem.name}</a>
        </li>
      )}
    </>
  );
};

export default Navlinks;
