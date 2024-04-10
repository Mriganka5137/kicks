import AdminSidebar from "@/components/admin/AdminSidebar";
import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}
const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className=" flex">
      <AdminSidebar />
      {children}
    </div>
  );
};

export default AdminLayout;
