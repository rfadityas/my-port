// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })
import React from "react";
import Image from "next/image";

export default function Home() {
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
      <div className="w-full flex flex-wrap justify-center text-center ">
        <div className="">
          <Image
            alt="Logo"
            width={124}
            height={124}
            className="mx-4 mb-4"
            src="/img/peep-66.png"
          />
        </div>
        <div className="pb-4 px-4">
          <span className="font-bold text-4xl mb-4 bg-black text-white p-4 rounded-lg inline-block">
            About Me
          </span>
          <p>
            Halo, nama saya Raihan, dan saya adalah seorang junior programmer
            yang berdedikasi dan bersemangat. Sejak kecil, saya selalu tertarik
            dengan IT, dan minat saya terus berkembang hingga saya memutuskan
            untuk mengejar karier di bidang ini. Saya telah mengumpulkan
            pengalaman dan keterampilan yang luas dalam Web Programming selama
            bertahun-tahun.
          </p>
        </div>
      </div>
    </div>
  );
}
