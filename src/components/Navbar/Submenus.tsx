const Submenus = ({ submenus }) => {
  console.log(submenus);
  return (
    <ul className="relative">
      {submenus.map((menu) => (
        <li className="absolute left-0 bg-red-800">{menu.name}</li>
      ))}
    </ul>
  );
};

export default Submenus;
