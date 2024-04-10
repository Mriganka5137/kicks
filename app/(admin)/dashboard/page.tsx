import { checkRole } from "@/lib/utils";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = () => {
  if (!checkRole("admin")) redirect("/");

  return (
    <div>
      <h1>This is Admin page for shop owner</h1>
    </div>
  );
};

export default Dashboard;
