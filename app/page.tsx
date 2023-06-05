import { InvestmentSection } from "@/components/investmentSection";
import { Header } from "@/components/header";
import { MainSection } from "@/components/main";
import { FlowSection } from "@/components/flowSection";

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <InvestmentSection />

      <div className="mt-40">
        <FlowSection />
      </div>
    </>
  );
}
