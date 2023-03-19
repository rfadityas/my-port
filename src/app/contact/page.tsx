import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintbrush,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

export default function page() {
  return (
    <div
      className="
    md:w-1/2
    w-[90%]
    mx-auto
    my-10
    gap-[5px]
    p-2
    border-[3px] border-black shadow-[8px_8px_0_0_#000000]
    rounded-md"
    >
      <div className="w-full flex flex-col justify-center text-center ">
        <div className="mx-auto">
          <Image
            alt="Logo"
            width={124}
            height={124}
            className="mx-4 mb-4"
            src="/img/chat.png"
          />
        </div>
        <div className="pb-4 px-4">
          <span className="font-bold text-4xl mb-4 bg-black text-white p-4 rounded-lg inline-block">
            Contact
          </span>
          <div className="w-full flex flex-wrap justify-center gap-8 pt-4">
            <div className="w-[45%] max-h-[170px] border-[3px] border-black shadow-[8px_8px_0_0_#000000] p-8 hover:shadow-[15px_15px_0_0_#000000] cursor-pointer flex flex-wrap justify-center md:items-center gap-4 md:gap-2">
              <Image
                alt="Logo"
                width={54}
                height={54}
                src="/img/instagram.png"
              />
              <h2 className="font-bold text-2xl hidden lg:block">
                @rf.aditya_
              </h2>
            </div>
            <div className="w-[45%] max-h-[170px] border-[3px] border-black shadow-[8px_8px_0_0_#000000] p-8 hover:shadow-[15px_15px_0_0_#000000] cursor-pointer flex flex-wrap justify-center md:items-center gap-4 md:gap-2">
              <Image alt="Logo" width={54} height={54} src="/img/discord.png" />
              <h2 className="font-bold text-2xl hidden lg:block">
                MAX!MUS#3856
              </h2>
            </div>
            <div className="w-[45%] max-h-[170px] border-[3px] border-black shadow-[8px_8px_0_0_#000000] p-8 hover:shadow-[15px_15px_0_0_#000000] cursor-pointer flex flex-wrap justify-center md:items-center gap-4 md:gap-2">
              <Image alt="Logo" width={54} height={54} src="/img/lnkdn.png" />
              <h2 className="font-bold text-2xl hidden lg:block">
                Raihan Fajar Aditya
              </h2>
            </div>
            <div className="w-[45%] max-h-[170px] border-[3px] border-black shadow-[8px_8px_0_0_#000000] p-8 hover:shadow-[15px_15px_0_0_#000000] cursor-pointer flex flex-wrap justify-center md:items-center gap-4 md:gap-2">
              <Image
                alt="Logo"
                width={54}
                height={54}
                src="/img/telegram.png"
              />
              <h2 className="font-bold text-2xl hidden lg:block">@initeleee</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
