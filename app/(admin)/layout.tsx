import AdminSidebar from "@/components/admin/AdminSidebar";
import { checkRole } from "@/lib/utils";
import { redirect } from "next/navigation";
import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}
const AdminLayout = async ({ children }: AdminLayoutProps) => {
  if (!checkRole("admin")) redirect("/");
  return (
    <div className=" flex">
      <AdminSidebar />
      {children}
    </div>
  );
};

export default AdminLayout;
