import Image from "next/image";
import React from "react";
import SaffFeild from "@/Assets/SaffronBasket.jpg";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
const HeroSection = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={SaffFeild}
          width={1920}
          height={1080}
          alt="saffron field"
          className="object-cover w-screen h-screen"
        />
        <div className="absolute top-0 hero-overlay z-10 overlay object-cover min-w-[100svw] min-h-[100svh] md:min-w-[100dvw] md:min-h-[100dvh]">
          <MaxWidthWrapper>
            <div className="flex flex-col justify-center items-center gap-8">
              <h1 className=" md:text-5xl max-w-prose text-3xl text-center sm:text-4xl mt-12 ">
                Discover the Essence of
                <span className="font-semibold  text-duoColor">
                  {" "}
                  Kashmiri Elegance
                </span>
                .
              </h1>
              <p className="md:text-xl  text-muted-foreground max-w-prose text-center">
                Step into Kashmir{`'`}s essence. Explore the richness of our
                land through exquisite saffron, nourishing walnuts, potent
                shilajit, and wholesome almonds. Discover the heart of Kashmiri
                craftsmanship.
              </p>
              <Button
                size="lg"
                className="md:text-xl bg-background/40  border-duoColor hover:bg-duoColor hover:text-black rounded-none px-4"
                variant="outline"
              >
                Explore Our Collection
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
