"use client";
import { SaffronThreadOne, SaffronThreadTwo, Himachal } from "@/Assets";
import Image from "next/image";
import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
const ShilajitOverlay = () => {
  return (
    <div className="relative ">
      <Image
        src={Himachal}
        width={1920}
        height={1080}
        alt="saffron field"
        className="object-cover absolute -top-12 -z-10 max-w-[100svw] max-h-[100svh] min-w-[100svw] min-h-[100svh]"
      />
      <div className="shilajit-overlay object-cover absolute -top-12 -z-10 max-w-[100svw] max-h-[100svh] min-w-[100svw] min-h-[100svh]" />
    </div>
  );
};

export default ShilajitOverlay;
