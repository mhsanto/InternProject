const Submenus = ({ menu }) => {
  console.log(menu);
  return (
    <>
      <li className="hover:bg-slate-700 hover:text-white py-1  px-3 cursor-pointer font-medium relative">
        {menu.name}
        <ul className="absolute top-0 bg-white text-black right-0 py-0 px-3 hover:bg-slate-700/80 hover:text-white">
          <li className="py-1">
            {menu.frameworks ? menu.frameworks.title : undefined}
          </li>
        </ul>
      </li>
    </>
  );
};

export default Submenus;
