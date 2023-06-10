import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

export const ModalContainer: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in flex items-center justify-center">
      {children}
    </div>
  );
};
