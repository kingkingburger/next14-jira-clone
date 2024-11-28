"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname(); // 현재 경로 가져오기

  // 현재 경로에 따라 버튼 텍스트와 URL을 결정
  const isSignIn = pathname === "/sign-in"; // 현재 경로가 "/sign-in"인지 확인
  const buttonText = isSignIn ? "Sign up" : "Sign in"; // 버튼 텍스트
  const buttonHref = isSignIn ? "/sign-up" : "/sign-in"; // 이동할 경로

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="logo.svg" height={56} width={152} alt="logo"></Image>
          <Link href={buttonHref}>
            <Button variant="secondary">{buttonText}</Button>
          </Link>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
