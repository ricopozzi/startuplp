"use client";

import React from "react";
import { Nanum_Myeongjo } from "next/font/google";
import { useAtom } from "jotai";
import { ModalAtom } from "@/contexts/modal";
import { InvestorContact } from "./investorContact";
import { SellerContact } from "./sellerContact";

const nanum = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const MainSection: React.FC<any> = () => {
  const [modal, setModal] = useAtom(ModalAtom);
  return (
    <main className="w-full h-[50vh] md:h-[70vh] flex flex-col items-center justify-center px-3">
      <p
        style={nanum.style}
        className="text-[2.8rem] md:text-[5rem] font-bold tracking-tight text-center leading-[1] text-gray-900 text-transparent bg-clip-text bg-gradient-to-br from-gray-600 to-gray-900 py-1 h-40 md:h-52 bg-black"
      >
        Eleve seu portifólio
        <br className="hidden md:flex" /> com créditos judiciais
      </p>
      <p className="font-light text-gray-600 md:w-1/2 text-center text-xl">
        Diversifique seu portifólio com ativos que rendem mais do que a renda
        fixa e com baixo risco
      </p>

      <div className="flex items-center gap-x-8 justify-center mt-14">
        <button
          onClick={() =>
            setModal((actual) => ({
              isOpen: true,
              children: <InvestorContact />,
            }))
          }
          className="bg-black border-2 border-black px-6 h-11 text-white rounded-md duration-100 hover:bg-white hover:text-black font-medium"
        >
          Quero investir
        </button>

        <button
          onClick={() =>
            setModal((actual) => ({
              isOpen: true,
              children: <SellerContact />,
            }))
          }
          className="bg-white border-2 border-white hover:border-gray-200 px-6 h-11 text-black rounded-md duration-100 hover:bg-gray-100 hover:text-gray-900 font-medium"
        >
          Quero vender
        </button>
      </div>
    </main>
  );
};
