// src/components/SkillsSection.tsx

import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import "../../../App.css";
import { FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaReact, FaGithub, FaNodeJs, FaDocker, FaBootstrap } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiTailwindcss, SiTypescript, SiExpress, SiMysql, SiPostgresql, SiGitlab } from 'react-icons/si';


// Asegúrate de tener el plugin 'tailwind-scrollbar' instalado y configurado en tu tailwind.config.js
// npm install --save-dev tailwind-scrollbar

type Skill = {
  name: string;
  icon: React.ElementType;
  color: string;
};

const skillsData: Skill[] = [
  { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'SASS', icon: FaSass, color: 'text-pink-500' },
  { name: 'BOOTSTRAP', icon: FaBootstrap, color: 'text-[#7b11f8]'},
  { name: 'TAILWIND', icon: SiTailwindcss, color: 'text-blue-400' },
  { name: 'JAVASCRIPT', icon: FaJsSquare, color: 'text-yellow-400' },
  { name: 'TYPESCRIPT', icon: SiTypescript, color: 'text-[#3178c6]' },
  { name: 'REACT JS', icon: FaReact, color: 'text-cyan-400' },
  { name: 'NODE JS', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'EXPRESS JS', icon: SiExpress, color: 'text-' },
  { name: 'MONGODB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'MYSQL', icon: SiMysql, color: 'text-gray-400' },
  { name: 'POSTGRESQL', icon: SiPostgresql, color: 'text-[#336790]' },
  { name: 'FIREBASE', icon: SiFirebase, color: 'text-amber-500' },
  { name: 'DOCKER', icon: FaDocker, color: 'text-blue-600' },
  { name: 'GITHUB', icon: FaGithub, color: 'text-white' },
  { name: 'GITLAB', icon: SiGitlab, color: 'text-[#e24329]' },

];

const SkillsSection: React.FC = () => {
  const skillsGridRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
     const { t } = useTranslation();

  // Función para calcular el progreso del desplazamiento
  const handleScroll = () => {
    if (skillsGridRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = skillsGridRef.current;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const gridElement = skillsGridRef.current;
    if (gridElement) {
      gridElement.addEventListener('scroll', handleScroll);
      // Cálculo inicial
      handleScroll();
      return () => {
        gridElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);


  return (
    <section id='skill' className='w-full flex justify-center items-center pt-[2rem] lg:pt-[5rem]'>
      <div className="bg-[#121212]  w-full max-w-[1300px] flex justify-self-center flex-col gap-10 justify-around items-center text-white font-sans md:p-12">

        {/* SECCIÓN "WHAT I DO" */}
        <div className="w-full md:max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-center font-bold text-yellow-400 mb-4">
            {t('skill.title')}
          </h2>
        </div>

        {/* SECCIÓN DE HABILIDADES */}
        <div className="w-full flex"> {/* Se agregó w-full aquí */}

          {/* Etiqueta vertical "Skills" */}
          <div className="flex justify-self-start items-center">
            <span
              className="text-2xl font-bold uppercase tracking-widest"
              style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
            >
              Skills
            </span>
            <div className="w-1 h-full bg-yellow-400 mr-4"></div>
          </div>

          {/* Contenedor principal para el grid y el scroll */}
          <div className="relative flex-1 flex overflow-hidden"> {/* Se agregaron flex y overflow-hidden */}
            {/* Grid de habilidades */}
            {/*
                Altura aproximada para 2 filas (ajusta 'h-[25rem]' según sea necesario):
                Cada elemento de habilidad: p-6 (24px * 2 = 48px) para el relleno, más el icono (64px) y el texto (ej. 20px). Total ~132px.
                Dos filas serían 132px * 2 = 264px.
                Gap-6 entre filas es 24px. Así que, 264px + 24px = 288px.
                Usemos una clase de altura de Tailwind como h-96 (24rem = 384px) o h-80 (20rem = 320px)
                Necesitamos asegurarnos de que la altura sea exactamente suficiente para 2 filas y el espacio, así que usaremos un valor personalizado `h-[calc(2*12rem+1.5rem)]`
                Asumiendo que un elemento de habilidad con relleno tiene aproximadamente 12rem (192px) de alto (p-6 + tamaño de icono + tamaño de texto)
                (icono de 64px + texto de 20px + relleno de 24px*2 = 128px, aproximadamente 8rem).
                Estimemos 10rem (160px) por fila incluyendo el relleno, etc.
                Entonces, para 2 filas + 1 gap-6 (24px/1.5rem), altura total: 2 * 10rem + 1.5rem = 21.5rem (344px)
                Establezcamos una altura fija que muestre claramente solo 2 filas, por ejemplo `h-[340px]` o `h-[21.25rem]`
            */}
            <div
              ref={skillsGridRef}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-6 flex-1 pr-8 lgpr-16 overflow-y-scroll
                         scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-[#1e1e1e]
                         hover:scrollbar-thumb-yellow-500 active:scrollbar-thumb-yellow-600
                         h-[21.5rem]
                         "
                                                  style={{scrollbarWidth: 'none',
          msOverflowStyle: 'none'}}
            >
              {skillsData.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index} // Usar el índice como clave está bien si los elementos no cambian de orden o se agregan/eliminan. De lo contrario, usa un ID único.
                    className="bg-[#1e1e1e] rounded-lg p-6 flex flex-col items-center justify-center gap-4 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <IconComponent className={`text-6xl ${skill.color}`} />
                    <span className="text-sm font-medium tracking-wider uppercase text-center">{skill.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Indicador de Desplazamiento Personalizado (Barra de Progreso Vertical) */}
            {skillsGridRef.current && (skillsGridRef.current.scrollHeight > skillsGridRef.current.clientHeight) && (
                 <div className="absolute right-0 top-0 h-full w-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                    className="bg-yellow-400 rounded-full transition-all duration-100 ease-out"
                    style={{ height: `${scrollProgress}%` }}
                    ></div>
                 </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;