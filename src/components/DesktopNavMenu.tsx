"use client";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { URLPATHS } from "@/consts/consts";
import { usePathname } from "next/navigation";
const DesktopNavMenu = () => {
  const pathname = usePathname();
  return (
    <>
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "outline", size: "lg" }), {
          "bg-accent": URLPATHS.HOME === pathname,
        })}
      >
        <h1 className="text-xl">Home</h1>
      </Link>
      <Link
        href="/about"
        className={cn(buttonVariants({ variant: "outline", size: "lg" }), {
          "bg-accent": URLPATHS.ABOUT === pathname,
        })}
      >
        <h1 className="text-xl">About</h1>
      </Link>
    </>
  );
};

export default DesktopNavMenu;
