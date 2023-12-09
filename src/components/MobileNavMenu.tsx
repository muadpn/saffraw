"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { RiMenu3Fill } from "react-icons/ri";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { URLPATHS } from "@/consts/consts";
import Link from "next/link";

const MobileNavMenu = () => {
  const pathname = usePathname();
  return (
    <Sheet modal={true}>
      <SheetTrigger>
        <RiMenu3Fill size={32} className="fill-white  stroke-white" />
      </SheetTrigger>
      <SheetContent className="">
        <SheetHeader>
          <SheetTitle className="text-white">Menu</SheetTitle>
        </SheetHeader>
        <SheetDescription>
          <div className="">
            <div className="py-4">
              <SheetClose asChild>
                <Link href="/" className="flex items-center justify-between">
                  <h3 className="text-2xl animate-pulse">Home</h3>
                  {pathname !== URLPATHS.HOME && <ArrowRight />}
                </Link>
              </SheetClose>
              <div className="w-full bg-zinc-300/60 animate-pulse h-[1.2px] " />
            </div>
            <div className="py-4">
              <SheetClose asChild>
                <Link
                  href="/about"
                  className="flex items-center justify-between"
                >
                  <h3 className="text-2xl animate-pulse">About</h3>
                  {pathname !== URLPATHS.ABOUT && <ArrowRight />}
                </Link>
              </SheetClose>
              <div className="w-full bg-zinc-300/60 animate-pulse h-[1.2px] " />
            </div>
          </div>
        </SheetDescription>
        <SheetFooter className="flex ">
          <div className="mt-36">
            <h1 className="text-2xl">Contact Us</h1>
            <div className="flex justify-between py-5 ">
              <ArrowRight /> <ArrowRight /> <ArrowRight /> <ArrowRight />
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavMenu;
