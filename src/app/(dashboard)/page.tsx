import React from "react";
import { getCurrent } from "@/features/auth/action";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrent();

  if (!user) {
    redirect("/sign-in");
  }

  return <div className="">This is a home page</div>;
}
