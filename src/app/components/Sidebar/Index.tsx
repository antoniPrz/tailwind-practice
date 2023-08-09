import { Logo } from "./Logo";
import {Search} from "lucide-react"


export function Sidebar(){
    return (<>
         
      <aside className=' border-r border-zinc-200 px-5 py-8 space-y-6'>
      <Logo/>
      {/* searchbar */}
      <div className="border border-zinc-300 px-3 py-2 gap-2 rounded-lg w-full flex items-center shadow-md">
        <Search className="h-5 w-5 text-zinc-500"/>
        <input type="text" className="flex-1 p-0 text-zinc-900 placeholder-zinc-600 border-0 bg-transparent" placeholder="Search"/>
      </div>


      </aside>

    </>)
}