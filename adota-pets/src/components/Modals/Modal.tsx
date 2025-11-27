import React, { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { RiCloseLargeFill } from "react-icons/ri";

interface IModalProps {
  children: ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  width?: string;
}

const Modal = ({ children, open, setOpen, width="w-5xl" }: IModalProps) => {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    // prevent background scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, setOpen]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center "
      role="dialog"
      aria-modal="true"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/60 "
        onClick={() => setOpen(false)}
      />
      {/* modal content */}
      <div
        className={`relative z-10 bg-white dark:bg-slate-800 rounded-lg shadow-lg   mx-4 ${width}
        max-h-[90vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Fechar"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <RiCloseLargeFill />
        </button>
        <div className="p-8 flex flex-col w-4/5 mx-auto my-2">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
