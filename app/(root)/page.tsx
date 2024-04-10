"use client";

import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  console.log(user);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
    </main>
  );
}
