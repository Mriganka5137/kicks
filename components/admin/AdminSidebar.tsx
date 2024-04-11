import React from "react";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";
import { MdOutlineDashboard } from "react-icons/md";
import Categories from "./Categories";
import SidebarButton from "./SidebarButton";

const sidebarLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <MdOutlineDashboard className="size-5" />,
  },
  {
    name: "Users",
    href: "/dashboard/users",
    icon: <FaUsers className="size-5" />,
  },
  {
    name: "All Products",
    href: "/dashboard/products",
    icon: <GiConverseShoe className="size-5" />,
  },
  {
    name: "Order List ",
    href: "/dashboard/orders",
    icon: <PiShoppingBagOpenFill className="size-5" />,
  },
];

const AdminSidebar = () => {
  return (
    <div className=" w-[260px] bg min-h-screen flex items-center flex-col px-6 gap-10 bg-slate-50 py-8 border-r ">
      <Link href="/">
        <Image src={logo} alt="logo" className="w-[128px]" />
      </Link>
      <div className="flex flex-col gap-5 w-full">
        {sidebarLinks.map((sl) => (
          <SidebarButton
            key={sl.name}
            href={sl.href}
            icon={sl.icon}
            name={sl.name}
          />
        ))}
      </div>
      <Categories />
    </div>
  );
};

export default AdminSidebar;
