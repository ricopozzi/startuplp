import React from "react";

export const Footer: React.FC<any> = () => {
  return (
    <footer className="w-full min-h-40 px-4">
      <main className="w-full h-full bg-gray-900 rounded-t-[90px] md:px-10 px-4 py-20 text-white">
        <div id="logo" className="md:w-60">
          <p className="font-bold text-4xl">Justo</p>
          <p className="font-light text-xs mt-2">
            Todos os direitos reservados
          </p>
        </div>
      </main>
    </footer>
  );
};
