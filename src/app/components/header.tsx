import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div
      className="w-1/2
    mx-auto
    my-4
    gap-[5px]
    p-2
    border-[3px] border-black shadow-[8px_8px_0_0_#000000]
    rounded-md"
    >
      <div className="md:flex justify-between items-center text-center px-4 py-2">
        <div className="">
          <h1 className="font-semibold text-2xl">Jarsky</h1>
        </div>
        <div className="hidden md:flex pt-4 pb-[2px] md:pt-0 md:pb-0">
          <Link href={"/"} className={"px-4 py-2 rounded-md hover:bg-zinc-100"}>
            About
          </Link>
          <Link
            href={"/contact"}
            className={"px-4 py-2 rounded-md hover:bg-zinc-100"}
          >
            Contact
          </Link>
        </div>
        <button className="absolute top-7 left-3 md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200">
          <div className="w-6 h-1 bg-gray-600 mb-1"></div>
          <div className="w-6 h-1 bg-gray-600 mb-1"></div>
          <div className="w-6 h-1 bg-gray-600 mb-1"></div>
        </button>
      </div>
    </div>
  );
}

export default Header;
