"use client";

import React, { useEffect, useRef, useState } from "react";
import analysisImage from "@/public/analysis.svg";
import Image from "next/image";

interface FlowPointProps {
  text: string;
  title: string;
  number: number;
}

const FlowPoint: React.FC<FlowPointProps> = ({ text, title, number }) => {
  return (
    <div className="relative w-full mx-auto flex gap-x-5 items-center justify-center">
      <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center text-2xl top-0 text-green-400">
        {number}
      </div>
      <div className="w-[300px]">
        <p className="font-medium text-lg">{title}</p>
        <p className="font-light text-gray-700 mt-2">{text}</p>
      </div>
    </div>
  );
};

export const FlowSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [centerHeight, setCenterHeight] = useState<number | undefined>(0);

  useEffect(() => {
    setCenterHeight(sectionRef.current?.offsetHeight);
  }, [sectionRef.current]);

  return (
    <section className="w-full flex flex-col justify-center items-center p-3">
      <p className="text-5xl font-medium">Nosso processo</p>

      <main className="flex-col flex md:flex-row justify-center items-center w-full h-full p-3 rounded-3xl bg-neutral-100">
        <FlowPoint
          number={4}
          text="Análise com modelo proprietário de crédito, se aprovado é disponibilizado ao investidores."
          title="Análise avançada"
        />

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
