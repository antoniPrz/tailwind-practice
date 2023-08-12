import { Logo } from "./Logo";
import { Search , BarChart, CheckSquare, ChevronDown, Flag, Home, SquareStack, Users, LifeBuoy, Cog } from "lucide-react";
import { NavItem } from "./NavItem";

export function Sidebar() {
  return (
    <>
      <aside className="  border-r border-zinc-200 px-5 py-8 flex flex-col gap-6">
        <Logo />
        {/* searchbar */}
        <div className=" mx-1 border border-zinc-300 px-3 py-2 gap-2 rounded-lg w-full flex items-center shadow-md">
          <Search className="mx-1h-5 w-5 text-zinc-500" />
          <input
            type="text"
            className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent"
            placeholder="Search"
          />
        </div>

        <nav className="">
      <NavItem title= "Home" icon={Home}/>
      <NavItem title= "Dashboard" icon={BarChart}/>
      <NavItem title= "Projects" icon={SquareStack}/>
      <NavItem title= "Tasks" icon={CheckSquare}/>
      <NavItem title= "Reporting" icon={Flag}/>
      <NavItem title= "Users" icon={Users}/>
      </nav>

        <div className="mt-auto flex flex-col gap-6 ">
          <div className="space-y-0.5">
          <NavItem title= "Support" icon={LifeBuoy}/>
          <NavItem title= "Settings" icon={Cog}/>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
          <div className="space-y-1">
            <p className="text-sm/5 font-medium text-violet-700">Used space</p>
            <p className="text-sm/5  text-violet-500">Your team has used 80% of your avaliable space. Need more?</p>
          </div>
        <div className="h-2 rounded-full bg-violet-200">
          <div className="h-2 w-4/5 rounded-full bg-violet-700 ">
            
          </div>
        </div>
        </div>


      </aside>
    </>
  );
}
