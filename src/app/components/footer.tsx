import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      className="md:w-1/2
      w-[90%]
        mx-auto
        my-4
        gap-[5px]
        p-2
        border-[3px] border-black shadow-[8px_8px_0_0_#000000]
        rounded-md"
    >
      <div className="justify-between items-center text-center px-4 py-2">
        <p className="text-[13px] md:text-[16px]">
          © 2023 - Raihan Fajar Aditya
        </p>
        <div className="flex justify-center items-center gap-2 pt-4">
          <Image alt="Logo" width={32} height={32} src="/img/ts.svg" />
          <Image alt="Logo" width={32} height={32} src="/img/tailwind.svg" />
          <Image alt="Logo" width={32} height={32} src="/img/nextjs-icon.png" />
        </div>
      </div>
    </div>
  );
}
