import { useEffect, useState } from "react";
import logo from "../../../../public/logo.png";
import logo2 from "../../../../public/logo2.png";
import { useTranslation } from 'react-i18next';
import "../../../App.css";

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const { t, i18n } = useTranslation();

  const navItems = [
    { href: '#home', label: 'layout.home' },
    { href: '#about', label: 'layout.about' },
    { href: '#socialMedia', label: 'layout.socialMedia' },
    { href: '#skill', label: 'layout.skills' },
    { href: '#experience', label: 'layout.resume' },
    { href: '#projects', label: 'layout.projects' },
    { href: '#education', label: 'layout.studies' },
  ];
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Efecto para el scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      let currentSection = '';
      navItems.forEach(item => {
        const section = document.querySelector(item.href)?.parentElement as HTMLElement | null;
        if (section && section.offsetTop <= window.scrollY + 150) {
          currentSection = item.href;
        }
      });
      if (currentSection) {
        setActiveSection(currentSection);
      } else {
        const homeSection = document.querySelector('#home')?.parentElement;
        if (homeSection && window.scrollY < homeSection.offsetHeight) {
            setActiveSection('#home');
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 NUEVO EFECTO para bloquear el scroll del body
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={`sticky z-50 top-0 left-0 w-full px-5 transition-colors duration-500 ${
        scrolled ? "bg-[linear-gradient(152deg,_#16254d,_#11192a)] h-15 " : "backdrop-blur-[2px] h-20"
      }`}
    >
      <div className="flex relative justify-between items-center w-full h-full px-5">
        <div className="hidden lg:block">
          <img className="object-cover h-10 w-10" src={logo} alt="Logo" />
        </div>

        {/* NUEVO ICONO DE HAMBURGUESA*/}
        <div className="lg:hidden z-[1000]">
            <button
                onClick={toggleMenu}
                className="relative h-8 w-8 text-white focus:outline-none"
                aria-label="Toggle menu"
            >
                <div className="block w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <span aria-hidden="true" className={`block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
                    <span aria-hidden="true" className={`block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span aria-hidden="true" className={`block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
                </div>
            </button>
        </div>

        {/* Menú para pantallas grandes */}
        <div className="hidden lg:flex items-center justify-between">
          <ul className="flex cursor-pointer items-center justify-between gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={`transition-colors t-shadow duration-300 ${activeSection === item.href ? 'font-bold text-[#00B4D8]' : 'hover:text-[#00B4D8]'}`}>
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Botones de idioma */}
        <div className="flex items-center gap-2">
           <button className={`cursor-pointer transition-colors duration-300 text-lg ${i18n.language === 'en-US' ? 'font-bold text-[#00B4D8]' : 'text-gray-300 hover:text-white'}`} onClick={() => changeLanguage('en-US')}>En</button>
           <span>/</span>
           <button className={`cursor-pointer transition-colors duration-300 text-lg ${i18n.language === 'es-ES' ? 'font-bold text-[#00B4D8]' : 'text-gray-300 hover:text-white'}`} onClick={() => changeLanguage('es-ES')}>Es</button>
        </div>
      </div>

      {/* 👇 NUEVO MENÚ MÓVIL CON BACKDROP Y TRANSICIÓN */}
      <>
        <div
          className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-500 z-[990] ${
            isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div
          className={`lg:hidden flex flex-col items-center justify-evenly bg-[linear-gradient(152deg,_#16254d,_#11192a)] w-4/5 max-w-sm h-screen py-4 px-5 fixed right-0 top-0 transition-transform duration-500 ease-in-out z-[999] border-l border-gray-700 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <img className="flex justify-self-center h-20 w-20" src={logo2} alt="Logo" />
          <ul className="flex flex-col justify-center items-center gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={handleLinkClick} className={`block t-shadow text-2xl py-2 transition-colors duration-300 ${activeSection === item.href ? 'font-bold text-[#00B4D8]' : 'hover:text-[#00B4D8]'}`}>
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </>
    </header>
  );
}

export default Layout;