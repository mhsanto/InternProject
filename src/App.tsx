import DropdownMenu from "./components/Navbar/DropdownMenu";
import Slider from "./components/Slider/Slider";

const App = () => {
  return (
    <div className="h-screen w-full bg-slate-300">
      <DropdownMenu />
      <Slider/>
    </div>
  );
};

export default App;
