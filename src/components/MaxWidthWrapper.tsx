import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("max-w-screen-2xl m-auto px-2.5 md:px-20 ", { className })}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
