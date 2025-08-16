// src/components/Modal.tsx

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";
import "../../../App.css";

// Reutilizamos el tipo que ya definimos
type CarouselItem = {
  title: string;
  description: string;
  image: string;
  link: string;
  logo: string;
  longDescription: string;
  date: string;
  type: string;
  pattern: string;
  techStack: string;
};

type ModalProps = {
  card: CarouselItem;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ card, onClose }) => {
  const { t } = useTranslation();
  // Efecto para cerrar el modal con la tecla "Escape"
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    // Limpieza del listener
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (

    <div
      className="fixed inset-0 backdrop-blur-[2px] flex items-center justify-center z-50 p-4"
      onClick={onClose} 
    >
      {/* Contenedor del Modal */}
      <div
        className="bg-[#111729] text-assest-white rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Encabezado */}
        <div className="p-6  flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-4">
            <img
              src={card.logo}
              alt={`${card.title} logo`}
              className="h-10 w-10 object-contain"
            />
          </div>
          <h2 id="modal-title" className="text-2xl font-bold t-shadow">
            {t(card.title)}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Cuerpo del Modal */}
        <div className="p-6">
          <p className="text-[#6B7280] pb-8 text-lg">
            {t(card.longDescription)}
          </p>


          <div className="flex gap-2 flex-col text-gray-700">
            <div className="flex gap-4 items-center">
              <strong className="font-semibold text-[#f3f4f6] t-shadow">
                {t("projects.dayTitle")}:
              </strong>
              <span className="text-[#6B7280]">{t(card.date)}</span>
            </div>
            <div className="flex gap-4 items-center">
              <strong className="font-semibold text-[#f3f4f6] t-shadow">
                {t("projects.typeTitle")}:
              </strong>
              <span className="text-[#6B7280]">{t(card.type)}</span>
            </div>
            <div className="flex gap-4 items-center">
              <strong className=" font-semibold text-[#f3f4f6] t-shadow">
                {t("projects.patterTitle")}:
              </strong>
              <span className="text-[#6B7280]">{t(card.pattern)}</span>
            </div>
            <div className="flex gap-4 items-center">
              <strong className=" font-semibold text-[#f3f4f6] t-shadow">
                {t("projects.tech")}:
              </strong>
              <span className="text-[#6B7280]">{t(card.techStack)}</span>
            </div>
            <div className="flex gap-4 items-center">
              <strong className=" font-semibold text-[#f3f4f6] t-shadow">LINK:</strong>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:text-cyan-700 font-semibold transition-colors"
              >
                {t("projects.link")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

