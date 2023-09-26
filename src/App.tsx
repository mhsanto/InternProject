import FlowbiteTailwind from "./components/FlowbiteTailwind";
import DropdownMenu from "./components/Navbar/DropdownMenu";

const App = () => {
  return (
    <div className="h-screen w-full bg-slate-300">
      <DropdownMenu />
      <FlowbiteTailwind />
    </div>
  );
};

export default App;
