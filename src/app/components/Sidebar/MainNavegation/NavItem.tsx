export interface NavItemProps {
  title: string;
  icon: ElementType;
}

import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

export function NavItem({ title, icon: Icon}: NavItemProps) {
  return (
    <a
      href="#"
      className="group flex items-center gap-3 px-3 py-2 hover:bg-violet-50 rounded-lg"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-400" />
    </a>
  );
}
