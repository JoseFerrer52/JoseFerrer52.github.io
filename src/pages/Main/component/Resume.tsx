// src/components/ExperienceSection.tsx

import React from "react";
import "../../../App.css";
import { useTranslation } from "react-i18next";
import "../styles/resume.css";
import deevopp from "../../../../public/deevopp.png";
import id_for_ideas from "../../../../public/id_for_ideas.png";
import { useInView } from "react-intersection-observer";

type Props = {
  delay?: number;
};

const ExperienceSection: React.FC<Props> = ({ delay = 300 }) => {
  const { ref, inView } = useInView({
    // Opciones del Intersection Observer
    triggerOnce: true, // La animación solo se dispara una vez
    threshold: 0.01, // Se activa cuando el 10% del elemento es visible
  });
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  const { t } = useTranslation();
  return (
    <section
      id="experience"
      className=" flex flex-col items-center justify-center w-full [height:inherit] contain text-[#f3f4f6]"
    >
      <div className="w-full lg:max-w-[1300px] mx-auto flex flex-col items-center justify-center gap-2 ">
        <h3 className="relative pl-10 text-sm xl:text-lg uppercase line t-shadow">
          My Resume
        </h3>
        <h2 className="text-3xl md:text-4xl pb-5 xlpb-15 text-center font-bold text-[#f3f4f6] mb-6 t-shadow">
          {t("resume.subtitle")}
        </h2>
        <div className="relative w-full h-[450px] xl:h-[600px] flex justify-start xl:justify-center">
          {" "}
          <div className=" relative w-[3px] bg-[#00B4D8] h-full">
            <div
              ref={ref1}
              className={`experience-card experience-card-left experience-card-left-item transition-all duration-700 ease-out ${   
                inView1
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-[100%] lg:translate-x-[-100%]  "
              } `}
              style={{
                transitionDelay: `${delay}ms`, // Aplica el retraso si se proporciona
              }}
            >
              <div className="experience-card-content card-border-right card-radius-right">
                <div className="flex items-center gap-2">
                  <img
                    src={deevopp}
                    alt="deevopp logo"
                    className="h-8 w-8 object-contain rounded-[8px]"
                  />
                  <h3 className="experience-card-content-title">
                    {t("resume.workTitleOne")}
                  </h3>
                </div>

                <p className="experience-card-content-location">
                  DEEVOPP Riga, Letonia
                </p>
                <p className="experience-card-content-time">
                  {t("resume.workDateOne")}
                </p>
                <div className="experience-card-content-description">
                  <p>{t("resume.workDescriptionOne")}</p>
                </div>
              </div>
            </div>

            <div
            ref={ref}
            
             className={`experience-card experience-card-right experience-card-right-item transition-all duration-700 ease-out ${
                
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-[100%]"
              } `}style={{
                transitionDelay: `${delay}ms`, // Aplica el retraso si se proporciona
              }}>
              <div className="experience-card-content card-border-left card-radius-left">
                <div className="flex items-center gap-2">
                  <img
                    src={id_for_ideas}
                    alt="id for ideas logo"
                    className="h-7 w-7 object-contain rounded-[8px]"
                  />
                  <h3 className="experience-card-content-title">
                    {t("resume.workTitleTwo")}
                  </h3>
                </div>
                <p className="experience-card-content-location">ID For Ideas</p>
                <p className="experience-card-content-time">
                  {t("resume.workDateTwo")}
                </p>
                <div className="experience-card-content-description">
                  <p>{t("resume.workDescriptionTwo")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
