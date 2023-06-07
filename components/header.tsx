"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface ItemProps {
  text: string;
  path: string;
}

const navItemsArray = [
  {
    path: "/",
    text: "Início",
  },
  {
    path: "#proceso",
    text: "Nosso processo",
  },
  {
    path: "#contato",
    text: "Contato"
  }
];

const NavItem: React.FC<ItemProps> = ({ path, text }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(path)}
      className="px-4 h-8 rounded text-xl antialiased font-medium text-gray-700 hover:text-gray-900 duration-100"
    >
      {text}
    </button>
  );
};

export const Header: React.FC<any> = () => {
  return (
    <header className="h-20 px-3 md:px-12 flex md:justify-center items-center">
      <div id="logo" className="md:w-32">
        <p className="font-bold text-4xl">Justo</p>
      </div>

      <nav className="hidden md:flex w-full items-center justify-start gap-x-6 pl-40 ">
        {navItemsArray.map((item, index) => (
          <NavItem
            key={`NavItemKey-${index}`}
            path={item.path}
            text={item.text}
          />
        ))}
      </nav>

      <div
        id="logo"
        className="hidden md:flex items-center justify-center gap-x-4 "
      >
        <button className="px-5 w-max rounded-md border-2 border-black duration-100 hover:bg-white hover:text-black h-11 bg-black text-white font-medium">
          Quero investir
        </button>

        <button className="px-5 w-max rounded-md duration-100 hover:bg-gray-100 hover:text-black h-11 text-gray-800 font-medium">
          Entrar
        </button>
      </div>
    </header>
  );
};
