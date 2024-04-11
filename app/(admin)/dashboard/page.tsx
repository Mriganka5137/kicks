import { UserButton } from "@clerk/nextjs";

import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1>This is Admin page for shop owner</h1>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
};

export default Dashboard;
