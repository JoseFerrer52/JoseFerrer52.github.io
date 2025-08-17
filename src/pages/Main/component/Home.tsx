
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';
import cv_en from "../../../../public/cv/cv-jose-en.pdf";
import cv_es from "../../../../public/cv/cv-jose-es.pdf";
import Kill_la_Kill from "/user.jpg";
import "../../../App.css";


function Home() {

   const { t } = useTranslation();
   const cv = localStorage.getItem("i18nextLng") === "es-ES" ? cv_es : cv_en;
   
   
  const [text] = useTypewriter({
    words: ['Front-End Developer', 'Back-End Developer', 'Web Developer'], // Añade más palabras aquí si quieres
    loop: true, // Bucle infinito
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <section id='home' className="flex contain gap-10 flex-col items-center justify-center">
      <div className="w-30 h-30    lg:w-45 lg:h-45 rounded-full overflow-hidden border-5 border-background-color-2">
        <img
          className="w-full h-full object-cover"
          src={Kill_la_Kill}
          alt="imagen"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <h1 className="text-5xl font-bold text-center t-shadow">
          {t('home.title')} I'm Jose Ferrer
        </h1>
        
        <span 
          className="text-3xl font-medium text-center text-transparent bg-clip-text" 
          style={{backgroundImage: "linear-gradient(120deg, rgba(53, 133, 225, 1) 0%, rgba(26, 157, 89, 1) 100%)"}}
        >
          {text}
          {/* Este es el componente que crea el cursor parpadeante */}
          <Cursor cursorStyle='|' cursorColor='rgba(53, 133, 225, 1)'/> 
        </span>
        
        <div className="flex flex-col lg:flex-row pt-10 gap-6 items-center justify-center">
          <a className="w-[200px] h-12 text-center text-lg font-bold flex justify-center text-black-custom items-center rounded-md text-shadow-[1px, 1px, 1px, #000] hover:scale-90 duration-500 ease-in-out" style={{backgroundImage: "linear-gradient(120deg, rgba(53, 133, 225, 1) 0%, rgba(26, 157, 89, 1) 100%)"}} href="#projects">{t('home.work')}</a>
          <a className="w-[200px] h-12 text-center text-lg font-bold text-background-color-2 flex justify-center items-center rounded-md bg-blue-custom text-shadow-[1px, 1px, 1px, #000] border-background-color-2 border-1 hver hover:border-white hover:text-white hover:bg-blue-custom transition-all hover:scale-90 duration-500 ease-in-out" href={cv} target="_blank" rel="noopener">{t('home.cv')}</a>
        </div>
      </div>
    </section>
  );
}

export default Home;