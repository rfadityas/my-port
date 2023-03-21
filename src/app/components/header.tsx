"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { CiMenuBurger } from "react-icons/ci";
import { CgClose } from "react-icons/cg";

function Header() {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
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
            <Link
              href={"/"}
              className={"px-4 py-2 rounded-md hover:bg-zinc-100"}
            >
              About
            </Link>
            <Link
              href={"/contact"}
              className={"px-4 py-2 rounded-md hover:bg-zinc-100"}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute md:hidden top-6 left-6 text-4xl cursor-pointer p-[0.7rem] rounded-md hover:bg-slate-300 ease-in duration-200"
        onClick={() => setOpen(!isOpen)}
      >
        <CiMenuBurger />
      </div>
      <div
        className={
          isOpen
            ? "fixed md:hidden top-0 w-full h-[25%] bg-white border-[3px] border-black shadow-[8px_8px_0_0_#000000] transition duration-150"
            : "hidden"
        }
      >
        <div
          className="absolute top-8 left-6 text-4xl cursor-pointer p-2 rounded-md hover:bg-slate-300 ease-in duration-200"
          onClick={() => setOpen(!isOpen)}
        >
          {" "}
          <CgClose />
        </div>
        <div className="flex flex-col mt-[7.2rem] ml-[2.0rem] mr-[2.0rem] gap-6 text-2xl font-semibold">
          <Link href={"/"}>About</Link>
          <hr />
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
