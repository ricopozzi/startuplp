"use client";

import { InvestmentSection } from "@/components/investmentSection";
import { Header } from "@/components/header";
import { MainSection } from "@/components/main";
import { FlowSection } from "@/components/flowSection";
import { useAtom } from "jotai";
import { ModalAtom } from "@/contexts/modal";
import { ModalContainer } from "@/components/modal";
import { BenefitsSection } from "@/components/benefitsSection";
import { Footer } from "@/components/footer";

export default function Home() {
  const [modal, setModal] = useAtom(ModalAtom);
  return (
    <>
      <Header />
      <MainSection />
      <InvestmentSection />

      <div className="mt-40">
        <FlowSection />
      </div>
      <BenefitsSection />

      <div className="mt-10">
        <Footer />
      </div>

      {modal?.isOpen && <ModalContainer>{modal.children}</ModalContainer>}
    </>
  );
}
