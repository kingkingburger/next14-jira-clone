"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useCurrent } from "@/features/auth/api/user-current";
export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sing-in");
    }
  }, [data]);

  return <div className="">Only visible to authorized users.</div>;
}
