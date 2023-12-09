import React from "react";
import Logo from "@/Assets/Saff.jpg";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { RiMenu3Fill } from "react-icons/ri";
import { ArrowRight } from "lucide-react";
import MobileNavMenu from "./MobileNavMenu";
import DesktopNavMenu from "./DesktopNavMenu";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <>
      <nav className="p-4 rounded-b-2xl sticky z-50 top-0 bg-background/90  ">
        <MaxWidthWrapper>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 basis-full ">
              <Image
                src={Logo}
                alt="Saffrow Logo"
                width={56}
                height={56}
                className="rounded-full "
              />
              <h1 className="hidden md:block text-3xl font-semibold">
                Saffrow
              </h1>
            </div>
            {/* Mobile Navigation Bar */}
            <div className="md:hidden text-white">
              <MobileNavMenu />
            </div>
            {/* Desktop Navigation Bar */}
            <div className="hidden md:flex justify-center items-center gap-2 basis-full  ">
              <DesktopNavMenu />
            </div>
            <div className=" hidden md:block basis-full" />
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};

export default Navbar;
