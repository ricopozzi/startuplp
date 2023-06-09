"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import analysisImage from "@/public/analysis.svg";
import Image from "next/image";
import { Nanum_Myeongjo } from "next/font/google";
import {
  MagnifyingGlass,
  PaperPlaneTilt,
  PiggyBank,
} from "@phosphor-icons/react";
import { AnimatePresence, useInView } from "framer-motion";
import { motion } from "framer-motion";

const nanum = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

interface FlowPointProps {
  text: string;
  title: string;
  icon: ReactNode;
  button?: boolean;
  index: number;
}

const FlowPoint: React.FC<FlowPointProps> = ({
  text,
  title,
  icon,
  button,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-50%" }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: 0, y: "-50%" }}
      transition={{
        delay: index * 0.3,
      }}
      className="relative w-fit mx-auto flex gap-x-4 md:gap-x-10 justify-between"
    >
      <div className="h-min md:w-20 md:h-20 p-4 rounded-full bg-black flex items-center justify-center text-2xl top-0 text-[#01FF96]">
        {icon}
      </div>
      <div className="md:w-[340px]">
        <p style={nanum.style} className="text-4xl font-bold">
          {title}
        </p>
        <p className="font-light text-gray-600 mt-4 ml-1">{text}</p>

        {button && (
          <button className="px-5 w-max rounded-md border-2 border-black duration-100 hover:text-[#01FF96] h-11 bg-black text-white font-medium mt-10">
            Quero vender meu crédito
          </button>
        )}
      </div>
    </motion.div>
  );
};

export const FlowSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { margin: "-100px" });
  const [centerHeight, setCenterHeight] = useState<number | undefined>(0);

  useEffect(() => {
    setCenterHeight(sectionRef.current?.offsetHeight);
  }, [sectionRef.current]);

  return (
    <section className="w-full flex flex-col justify-center items-center p-0 md:p-10">
      <p style={nanum.style} className="text-5xl font-bold">
        Nosso processo
      </p>

      <main
        ref={sectionRef}
        className="flex-col mt-10 flex md:flex-row justify-center items-center w-full h-full p-4 md:p-20 py-20 md:rounded-[2.8rem] bg-neutral-100"
      >
        {inView && (
          <div className="w-full md:w-1/2 flex flex-col gap-32 relative">
            <AnimatePresence>
              <FlowPoint
                icon={<PaperPlaneTilt size={40} weight="bold" />}
                text="Vendedor solicita antecipação do crédito judicial na plataforma."
                title="Vendedor solicita"
                index={1}
              />
              <FlowPoint
                icon={<MagnifyingGlass size={40} weight="bold" />}
                text="Análise com modelo proprietário de crédito, se aprovado é disponibilizado ao investidores."
                title="Análise avançada"
                index={2}
              />
              <FlowPoint
                icon={<PiggyBank size={40} weight="bold" />}
                text="Os investidores escolhem quanto e em quais créditos trabalhistas querem investir."
                title="Investidores"
                index={3}
              />
            </AnimatePresence>
          </div>
        )}

        <div className="w-1/2 relative">
          <Image
            alt="Analise imagem"
            src={analysisImage}
            className=""
            width={550}
            height={500}
          />
        </div>
      </main>
    </section>
  );
};
