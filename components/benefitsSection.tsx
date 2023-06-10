import React, { ReactNode, useRef, useState } from "react";
import { Nanum_Myeongjo } from "next/font/google";
import { Fingerprint, Landmark, TrendingUp } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const nanum = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

interface ItemProps {
  title: string;
  text: string;
  icon: ReactNode;
}

const BenefitItem: React.FC<ItemProps> = ({ icon, text, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-30%" }}
      animate={{ opacity: 1, x: "0%" }}
      exit={{ opacity: 0, x: "-30%" }}
      transition={{ delay: Math.random() * 0.4 }}
      key={title}
      className="p-[2rem] w-full max-w-[340px] rounded-[32px] bg-neutral-100 flex flex-col items-center justify-around gap-4"
    >
      <div className="p-4 w-fit rounded-full bg-gray-800 text-green-400 flex items-center justify-center">
        {icon}
      </div>
      <p style={nanum.style} className="text-2xl text-black text-center">
        {title}
      </p>
      <p className="text font-light text-gray-700 text-center">{text}</p>
    </motion.div>
  );
};

export const BenefitsSection: React.FC<any> = () => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { margin: "-140px" });

  return (
    <section className="w-full flex flex-col justify-center items-center p-0 md:p-10 ">
      <main
        ref={itemRef}
        className="flex-col mt-10 gap-y-10 flex md:flex-row justify-center items-center w-full h-full p-4 md:p-20 rounded-[2.8rem] "
      >
        <div className="md:w-[40%]">
          <p style={nanum.style} className="text-[3rem] font-bold antialiased">
            Benefícios
          </p>
          <p className="text-gray-600 font-light text-lg">
            Com esse tipo de ativo, você tem benefícios que não são encontrados
            em nenhum outro mercado.
          </p>
        </div>
        {isInView && (
          <div className="w-full h-full flex flex-wrap justify-center gap-4">
            <AnimatePresence>
              <BenefitItem
                icon={<TrendingUp size={38} />}
                title="Mais de 18% ao ano"
                text="Fora do mercado tradicional, possui rentabilidade muito acima do que o convencional"
              />

              <BenefitItem
                icon={<Fingerprint size={38} />}
                title="Análise e investigação"
                text="Todas as operações passam por uma análise criteriosa para que você tenha acesso apenas a oportunidades com ótimo risco x retorno."
              />

              <BenefitItem
                icon={<Landmark size={38} />}
                title="Garantia de Economia Real"
                text="Grande parte dos ativos alternativos são lastreados em bens ou direitos, o que garante ainda mais segurança no seu investimento."
              />
            </AnimatePresence>
          </div>
        )}
      </main>
    </section>
  );
};
