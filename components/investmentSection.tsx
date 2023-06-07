"use client";

import React, { useState } from "react";
import heroSvg from "@/public/hero.svg";
import Image from "next/image";
import { Nanum_Myeongjo } from "next/font/google";
import { CaretRight } from "@phosphor-icons/react";

const nanum = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const InvestmentSection: React.FC = () => {
  const [hoveringButton, setHoveringButton] = useState<boolean>(false);

  return (
    <div className="w-full px-[3%]">
      <main className="w-full h-[90vh] md:h-[70vh] rounded-[3rem] bg-zinc-100 flex flex-col md:flex-row px-4 py-10">
        <div className="h-full md:w-[57%] relative">
          <Image alt="Imagem investimento" src={heroSvg} fill />
        </div>

        <div className="flex flex-col justify-center w-full md:w-[43%]">
          <p
            style={nanum.style}
            className="text-[3.8rem] leading-[3.6rem] md:w-[60%]"
          >
            Lorem ipsum dolor sit amet.
          </p>

          <p className="mt-5 font-light text-xl text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium, nulla quasi. Magni, recusandae dolore?
          </p>

          <button
            onMouseEnter={() => setHoveringButton(true)}
            onMouseLeave={() => setHoveringButton(false)}
            className="mt-4 h-8 flex items-center gap-x-2 "
          >
            Ver mais{" "}
            <CaretRight
              size={17}
              className={`duration-150 ${hoveringButton ? "ml-1" : "ml-0"} `}
              weight={hoveringButton ? "bold" : "regular"}
            />
          </button>
        </div>
      </main>
    </div>
  );
};
