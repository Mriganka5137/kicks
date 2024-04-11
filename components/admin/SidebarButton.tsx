"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";
interface SidebarButtonProps {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const SidebarButton = ({ href, icon, name }: SidebarButtonProps) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      key={name}
      className={cn(
        " w-full uppercase font-medium font-rubik px-4 py-3 rounded-lg hover:bg-slate-100 hover:text-blue-500 transition-all duration-200 flex gap-2 text-[14px] ",
        path === href
          ? "bg-blue-500 hover:bg-blue-400 text-white hover:text-white"
          : ""
      )}
    >
      {icon}
      <span>{name}</span>
    </Link>
  );
};

export default SidebarButton;
