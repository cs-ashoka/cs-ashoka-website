import cn from "@/utils/cn";
import { poppins, bayon } from "@/utils/fonts";
import React from "react";

function NotFound() {
  return (
    <div
      className={cn(
        "h-[calc(90vh-8rem)] flex flex-col items-center justify-center w-full",
        bayon.className
      )}
    >
      <h1 className="text-9xl text-center text-primary">404</h1>
      <p className="text-center text-3xl text-primary">
        This is not the page you are looking for.
      </p>
    </div>
  );
}

export default NotFound;
