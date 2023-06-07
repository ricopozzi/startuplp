import React from "react";
import { Nanum_Myeongjo } from "next/font/google";

const nanum = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const MainSection: React.FC<any> = () => {
  return (
    <main className="w-full h-[50vh] md:h-[70vh] flex flex-col items-center justify-center">
      <p
        style={nanum.style}
        className="text-[2.8rem] md:text-[5rem] font-bold tracking-tight text-center leading-[1]"
      >
        Create a stylish home <br className="hidden md:flex" /> for your
        company.
      </p>
      <p className="mt-8 font-light text-gray-600 md:w-1/2 text-center text-xl">
        Jetty is a modern Webflow template designed for companies that
        prioritize both aesthetics and functionality.
      </p>

      <div className="flex items-center gap-x-8 justify-center mt-14">
        <button className="bg-black border-2 border-black px-6 h-11 text-white rounded-md duration-100 hover:bg-white hover:text-black font-medium">
          Quero investir
        </button>

        <button className="bg-white border-2 border-white hover:border-gray-200 px-6 h-11 text-black rounded-md duration-100 hover:bg-gray-100 hover:text-gray-900 font-medium">
          Quero vender
        </button>
      </div>
    </main>
  );
};
