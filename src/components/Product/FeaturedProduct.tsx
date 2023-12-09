import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import FeaturedProductTitle from "./FeaturedProductTitle";
import { FeatureProduct } from "@/data/FeaturedProductData";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import MobileProductAccessibilityMenu from "./MobileProductAccessibilityMenu";
// import { FeatureProduct } from "@/data/FeaturedProductData";
const FeaturedProduct = () => {
  return (
    <MaxWidthWrapper>
      <div className="">
        <h1 className="text-5xl py-2 ">Products</h1>
        {/* <MobileProductAccessibilityMenu /> */}
      </div>

      <div className="flex flex-wrap items-center justify-center pb-24">
        {FeatureProduct.map((item) => {
          return (
            <div className=" py-6 px-6" key={item.id}>
              <div className="min-w-[251px] max-w-[251px]   ">
                <div className="min-w-[250px]  max-w-[250px] max-h-[250px] object-cover">
                  <Image
                    src={item.Featuredimage.image}
                    alt={item.Featuredimage.altTag}
                    width={250}
                    height={250}
                    className="min-w-[250px] max-w-[250px] max-h-[250px] min-h-[250px] object-cover"
                  />
                </div>
                <p className="pt-1">{item.title}</p>
                <div className="flex gap-2 py-2">
                  {item.varients.map((variant, i) => (
                    <div
                      key={i}
                      className={cn(
                        buttonVariants({ size: "icon", variant: "ghost" }),
                        "border-[1px] border-white rounded-none"
                      )}
                    >
                      <p>{variant}</p>
                    </div>
                  ))}
                </div>
                <p className="pb-2">Starting from @ ₹{item.price}</p>

                <button
                  className={cn(
                    buttonVariants({ className: "w-full rounded-none " })
                  )}
                >
                  Contact for purchase
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </MaxWidthWrapper>
  );
};

export default FeaturedProduct;
