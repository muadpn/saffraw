"use client";
import { SaffronThreadOne, SaffronThreadTwo } from "@/Assets";
import Image from "next/image";
import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
const SaffronOverlay = () => {
  return (
    <AnimatePresence>
      <motion.div
        id="SaffronOverlay"
        className="absolute w-screen  h-screen -z-10   "
      >
        <Image
          src={SaffronThreadOne}
          alt="saffronThread"
          width={120}
          height={120}
          className=" absolute -z-10 blur-[1px] animate-pulse "
        />

        <Image
          src={SaffronThreadTwo}
          alt="Saffron Thripple Thread"
          width={120}
          height={120}
          className="absolute -z-10 blur-[1px]  right-[10%] top-[25%] -rotate-45  -skew-x-12 animate-pulse"
        />
        <Image
          src={SaffronThreadTwo}
          alt="Saffron Thripple Thread"
          width={120}
          height={120}
          className="absolute -z-10 blur-[1px]  left-[50%] top-[15%] -rotate-90  -skew-x-12 animate-pulse"
        />
        <Image
          src={SaffronThreadTwo}
          alt="Saffron Thripple Thread"
          width={120}
          height={120}
          className="absolute -z-10 blur-[1px]  left-[20%] top-[15%] -rotate-90 animate-pulse"
        />

        <Image
          src={SaffronThreadOne}
          alt="saffronThread"
          width={120}
          height={120}
          className="absolute blur-[1px] -z-10 hidden md:block right-[0%] -rotate-45 animate-pulse"
        />

        <Image
          src={SaffronThreadOne}
          alt="saffronThread"
          width={120}
          height={120}
          className="absolute blur-[1px] -z-10 hidden sm:block left-[30%] top-[30%] -rotate-90  animate-pulse"
        />
        <Image
          src={SaffronThreadOne}
          alt="saffronThread"
          width={120}
          height={120}
          className="absolute blur-[1px] -z-10  left-[20%] top-[50%] -rotate-45  animate-pulse"
        />
        <Image
          src={SaffronThreadOne}
          alt="saffronThread"
          width={120}
          height={120}
          className="absolute blur-[1px] -z-10 right-[50%] top-[20%] rotate-180  animate-pulse"
        />
        <Image
          src={SaffronThreadOne}
          alt="saffronThread"
          width={120}
          height={120}
          className="absolute blur-[1px] -z-10 right-[35%] top-[50%] rotate-180  animate-pulse"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SaffronOverlay;
