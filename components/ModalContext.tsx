"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  openModal: (data: any) => void;
  closeModal: () => void;
  modalData: any;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalData, setModalData] = useState<any>(null);

  const openModal = (data: any) => {
    setModalData(data);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setModalData(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, modalData }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
