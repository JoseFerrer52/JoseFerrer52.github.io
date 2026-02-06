import React, { useState, useRef, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaArrowRight,
} from "react-icons/fa";
import "../../../App.css";

import Modal from "./Modal";

// --- PASO 1: CREAR UN CUSTOM HOOK PARA LA RESPONSIVIDAD ---

const useVisibleCards = () => {
  const getVisibleCards = () => {
    if (typeof window === "undefined") {
      return 3; // Valor por defecto para SSR (Server-Side Rendering)
    }

    if (window.innerWidth < 768) {
      return 1; // 📱 Pantallas pequeñas (móviles)
    }

    if (window.innerWidth < 1024) {
      return 2; //  टैबलेटs
    }

    return 3; // 💻 Pantallas grandes (escritorio)
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener("resize", handleResize);

    // Limpieza del event listener al desmontar el componente

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return visibleCards;
};

// (El resto de tu código de datos y tipos permanece igual)

type CarouselItem = {
  title: string;
  description: string;
  image: string;
  link: string;
  logo: string; // URL del logo del proyecto
  longDescription: string; // Una descripción más detallada para el modal
  date: string;
  type: string;
  pattern: string;
  techStack: string;
};

const originalCarouselData: CarouselItem[] = [
  {
    title: "projects.lifePost.title",
    description: "projects.lifePost.description",
    longDescription: "projects.lifePost.longDescription",
    image:
      "https://ik.imagekit.io/kz1hforrr/portfolio/portfolio-1.webp?updatedAt=1755113651562",
    link: "https://lifepost.vercel.app/",
    logo: "https://ik.imagekit.io/kz1hforrr/portfolio/lifepost-favicon.png?updatedAt=1755113068391", // Reemplaza con la ruta a tu logo
    date: "projects.lifePost.date",
    type: "projects.lifePost.type",
    pattern: "projects.lifePost.pattern",
    techStack: "NodeJS; ExpressJS; Pug",
  },
  {
    title: "projects.ImageOptimizator.title",
    description: "projects.ImageOptimizator.description",
    longDescription: "projects.ImageOptimizator.longDescription",
    image:
      "https://ik.imagekit.io/kz1hforrr/portfolio/portfolio-2.webp?updatedAt=1755113651729",
    logo: "https://ik.imagekit.io/kz1hforrr/portfolio/img-opt-favicon.png?updatedAt=1755113086005",
    date: "projects.ImageOptimizator.date",
    type: "projects.ImageOptimizator.type",
    link: "https://images-optimizator-1.onrender.com/",
    pattern: "projects.ImageOptimizator.pattern",
    techStack: "NodeJS; ExpressJS; ejs",
  },
  {
    title: "projects.listUserApi.title",
    description: "projects.listUserApi.description",
    longDescription: "projects.listUserApi.longDescription",
    image:
      "https://ik.imagekit.io/kz1hforrr/portfolio/portfolio-3.webp?updatedAt=1755113651606",
    link: "https://aesthetic-squirrel-569165.netlify.app/",
    logo: "https://ik.imagekit.io/kz1hforrr/portfolio/favicon-listuser-api.png?updatedAt=1755113103290",
    date: "projects.listUserApi.date",
    type: "projects.listUserApi.type",
    pattern: "projects.listUserApi.pattern",
    techStack: "NodeJS; ExpressJs; Typescript; ",
  },
  {
    title: "projects.listuser.title",
    description: "projects.listuser.description",
    longDescription: "projects.listuser.longDescription",
    image:
      "https://ik.imagekit.io/kz1hforrr/portfolio/portfolio-4.webp?updatedAt=1755113651398",
    link: "https://velvety-tulumba-8ba4fd.netlify.app/sign-in",
    logo: "https://ik.imagekit.io/kz1hforrr/portfolio/favicon-listuser-api.png?updatedAt=1755113103290",
    date: "projects.listuser.date",
    type: "projects.listuser.type",
    pattern: "projects.listuser.pattern",
    techStack: "ReactJS; Typescript",
  },
];

const ProjectSection: React.FC = () => {
  // --- PASO 2: USAR EL HOOK Y AJUSTAR LA LÓGICA ---

  const visibleCards = useVisibleCards(); // ¡Nuestra variable mágica!

  const cardWidthPercentage = 100 / visibleCards;

  const [cards] = useState([
    ...originalCarouselData,
    ...originalCarouselData,
    ...originalCarouselData,
  ]);

  const [activeIndex, setActiveIndex] = useState(originalCarouselData.length);

  const [isTransitioning, setIsTransitioning] = useState(true);

  const [isPaused, setIsPaused] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);

  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const [selectedCard, setSelectedCard] = useState<CarouselItem | null>(null);

  const { t } = useTranslation();

  const handleReadMore = (card: CarouselItem) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const touchStartRef = useRef<number | null>(null);

  const touchEndRef = useRef<number | null>(null);

  const minSwipeDistance = 50;

  const cardCount = originalCarouselData.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => prevIndex + 1);

    setIsTransitioning(true);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);

    setIsTransitioning(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    // Guardamos la posición inicial del dedo y reseteamos la final

    touchEndRef.current = null;

    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // Actualizamos la posición final mientras el dedo se mueve

    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;

    const distance = touchStartRef.current - touchEndRef.current;

    const isLeftSwipe = distance > minSwipeDistance;

    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    // Reseteamos las posiciones para el próximo swipe

    touchStartRef.current = null;

    touchEndRef.current = null;
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => handleNext(), 3000);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  const handleTransitionEnd = () => {
    if (activeIndex >= cardCount * 2) {
      setIsTransitioning(false);

      setActiveIndex(cardCount);
    } else if (activeIndex < cardCount) {
      setIsTransitioning(false);

      setActiveIndex(cardCount * 2 - 1);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      if (transitionTimeoutRef.current)
        clearTimeout(transitionTimeoutRef.current);

      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }

    return () => {
      if (transitionTimeoutRef.current)
        clearTimeout(transitionTimeoutRef.current);
    };
  }, [isTransitioning]);

  // --- PASO 3: CÁLCULO DE TRANSFORM DINÁMICO ---

  const getTransformValue = () => {
    // Si el número de tarjetas es impar (1 o 3), centramos la tarjeta del medio.

    if (visibleCards % 2 !== 0) {
      return `translateX(calc(50% - ${activeIndex * cardWidthPercentage}% - ${
        cardWidthPercentage / 2
      }%))`;
    }

    // Si es par (2), alineamos a la izquierda.

    return `translateX(-${activeIndex * cardWidthPercentage}%)`;
  };

  return (
    <section id="projects" className="relative pt-4 px-4 mt-4 lg:mt-16 overflow-hidden">
      <div className="text-center t-shadow pb-6">
        <h2 className="text-4xl font-bold ">{t("projects.title")}</h2>
      </div>

      <div
        className="relative w-full mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={carouselRef}
            className="flex"
            style={{
              transform: getTransformValue(), // Usamos la función para el valor dinámico

              transition: isTransitioning
                ? "transform 0.5s ease-in-out"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {cards.map((item, index) => (
              <div
                key={index}
                // --- PASO 4: CLASES DE ANCHO RESPONSIVAS ---

                className={`flex-none w-full md:w-1/2 lg:w-1/3 p-4 transition-all duration-500 ease-in-out`}
                style={{
                  // El efecto de escala solo se aplica en la vista de 3 tarjetas para mayor claridad

                  // transform: visibleCards === 3 && index !== activeIndex ? 'scale(0.9)' : 'scale(1)',

                  opacity:
                    visibleCards === 3 && index !== activeIndex ? 0.6 : 1,
                }}
              >
                <div className="flex flex-col h-full bg-[#111729] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative h-48 opacity-90">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 flex flex-col gap-2 flex-grow">
                    <h3 className="text-xl font-bold text-[#f3f4f6] t-shadow mb-2">
                      {t(item.title)}
                    </h3>

                    <p className="text-[#6B7280] mb-4 flex-grow">
                      {t(item.description)}
                    </p>

                    <button
                      onClick={() => handleReadMore(item)}
                      className="cursor-pointer inline-flex items-center gap-2  mt-auto text-cyan-500 hover:text-cyan-700 text-left"
                    >
                      {t('projects.read')} <FaArrowRight className=" w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botones de navegación (sin cambios) */}

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-20 -translate-y-1/2 -translate-x-1/2 w-16 h-16 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 z-10

                     hidden md:flex items-center justify-center backdrop-blur-[2px] border-1  border-gray-300 text-gray-50 cursor-pointer" // Oculto en móvil, visible en md y más grandes
          aria-label="Previous slide"
        >
          <FaLongArrowAltLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute top-1/2 right-20 -translate-y-1/2 translate-x-1/2 w-16 h-16 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 z-10

                     hidden md:flex items-center justify-center backdrop-blur-[2px] border-1  border-gray-300 text-gray-50 cursor-pointer" // Oculto en móvil, visible en md y más grandes
          aria-label="Next slide"
        >
          <FaLongArrowAltRight className="w-6 h-6" />
        </button>
      </div>

      {/* Puntos de Paginación (sin cambios) */}

      <div className="flex justify-center pt-4 gap-3">
        {originalCarouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(cardCount + index);

              setIsTransitioning(true);
            }}
            className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex % cardCount === index
                ? "bg-[#00B4D8]"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {selectedCard && <Modal card={selectedCard} onClose={handleCloseModal} />}
    </section>
  );
};

export default ProjectSection;
