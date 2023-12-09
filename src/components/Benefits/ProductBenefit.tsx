import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdPhoneEnabled } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import SaffronOverlay from "../Overlay/SaffronOverlay";
import Image from "next/image";
import { SaffFlower, SaffronThreadOne } from "@/Assets";
import { BenefitsData } from "@/data/ProductBenefitData";
const ProductBenefit = ({
  title,
  badge,
  Benefit,
  Enquire,
  GITag,
  QualityGuarentee,
  color,
  id,
  Overlay,
  textColor,
  image,
  titleImage,
}: BenefitsData) => {
  return (
    <>
      <MaxWidthWrapper>
        {/* {Overlay} */}
        <div className="pb-24 md:py-2">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <div className="relative">
                <h1 className="text-5xl">
                  {title.first}
                  <span className={cn(`${textColor}`)}> {title.colored} </span>
                  {title.last}
                </h1>
                {titleImage?.available && (
                  <Image
                    src={SaffronThreadOne}
                    alt="saffronThread"
                    width={120}
                    height={120}
                    className=" absolute -z-10 top-12 right-0  "
                  />
                )}
              </div>
              {badge && (
                <div className="py-2">
                  <p
                    className={cn(
                      `inline-block  min-w-max px-2 py-1  rounded-sm`,
                      `${Enquire.color} ${Enquire.textColor}`
                    )}
                  >
                    {badge.first}
                    <span className="font-bold"> {badge.second}</span>
                  </p>
                </div>
              )}
              <div className="flex gap-1 items-center ">
                <RiVerifiedBadgeFill />
                <p className="md:text-lg">Premium Quality guaranteed</p>
              </div>
              {/* Benifits */}
              <div className="py-6 ">
                {Benefit.map((item, key) => {
                  return (
                    <div
                      className="flex min-w-[30px] min-h-[30px] gap-1 py-2"
                      key={key}
                    >
                      <item.icon size={42} />
                      <p className="max-w-prose">{item.title}</p>
                    </div>
                  );
                })}
              </div>
              {/* Benifits ends */}

              {/* if GeoTag then show GeoTag */}
              {/* TODO GI TAG */}
              {/* GeoTag Ends */}

              {/* EnQuire Now  */}
              {Enquire.contact && (
                <div
                  className={cn(
                    `w-full sm:max-w-max  px-4 rounded-md py-1 `,
                    `  ${Enquire.textColor} ${Enquire.color} `
                  )}
                >
                  <div className="flex gap-4 items-center justify-around">
                    <p className="font-bold">Enquire Now </p>
                    <div className="flex gap-2">
                      <button
                        className={cn(
                          buttonVariants({ size: "icon", variant: "outline" }),
                          ""
                        )}
                      >
                        <MdPhoneEnabled size={26} className="fill-white" />
                      </button>{" "}
                      <button
                        className={cn(
                          buttonVariants({ size: "icon", variant: "outline" }),
                          ""
                        )}
                      >
                        <RiWhatsappLine size={26} className="fill-white" />{" "}
                      </button>{" "}
                      <button
                        className={cn(
                          buttonVariants({ size: "icon", variant: "outline" }),
                          ""
                        )}
                      >
                        <FaInstagram size={26} className="fill-white" />{" "}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* EnQuire Now ends  */}
            </div>
            <div className="flex items-center relative justify-center  pt-10 ">
              <div className="flex items-center w-full h-full justify-center relative pt-10 max-w-[350px] object-cover rounded-lg max-h-[450px] ">
                <Image
                  src={`/images/${image}`}
                  alt="SaffronFlower"
                  fill
                  className={cn(
                    `object-cover rounded-lg -top-12 -z-10 `,
                    ` border-${color.substring(3)} border-[2px] `
                  )}
                />
              </div>
              <div className="absolute w-12 bg-muted-foreground/40 bottom-10 h-3 rounded-full"></div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default ProductBenefit;
