// src/components/studySection.tsx

import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import certificate_open from "../../../../public/certificate_open.png";
import certificate_rolled from "../../../../public/certificate_rolled.png";
import "../../../App.css";
import "../styles/studies.css";
import "../styles/certificate.css";

type Props = {
  delay?: number;
};

const StudySection: React.FC<Props> = ({ delay = 100 }) => {
  const { ref, inView } = useInView({
    // Opciones del Intersection Observer
    triggerOnce: true, // La animación solo se dispara una vez
    threshold: 0.01, // Se activa cuando el 10% del elemento es visible
  });
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  const { t } = useTranslation();
  return (
    <section
      id="education"
      className=" flex flex-col items-center justify-center w-full [height:inherit] contain text-[#f3f4f6]"
    >
      <div className="w-full lg:max-w-[1300px] mx-auto flex flex-col items-center justify-center gap-2 ">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-[#f3f4f6] t-shadow">
          {t("studies.title")}
        </h2>
        <div className="relative w-full h-[1000px] xl:h-[1300px] flex justify-end xl:justify-center">
          {" "}
          <div className=" relative w-[3px] bg-[#00B4D8] h-full">
            <div
              ref={ref1}
              className={`study-card study-card-left-one study-card-left-item transition-all duration-700 ease-out ${
                inView1
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-[-100%]"
              } `}
              style={{
                transitionDelay: `${delay}ms`, // Aplica el retraso si se proporciona
              }}
            >
              <div className="study-card-content study-card-border-right study-card-radius-right">
                <div className="flex items-center justify-between ">
                  <h3 className="study-card-content-title">
                    {t("studies.studyTitleOne")}
                  </h3>
                  <a
                    href="https://www.udemy.com/certificate/UC-6efd5d61-7b2d-459c-b4d3-77aa1a8d8c9c/"
                    target="_blank"
                    title={t('studies.titleCertificate')}
                    rel="noopener noreferrer"
                    className="h-12 w-12 flex justify-end certificate-container text-[#00B4D8]"
                  >
                    <img
                      className="w-9 lg:w-12 h-12 object-contain certificate-rolled cursor-pointer"
                      src={certificate_rolled}
                      alt="certificate rolled"
                    />
                    <img
                      className="w-12 object-contain certificate-open cursor-pointer"
                      src={certificate_open}
                      alt="certificate open"
                    />
                  </a>
                </div>
                <p className="study-card-content-time">Udemy</p>
                <div className="study-card-content-description">
                  <p>{t("studies.studyDescriptionOne")}</p>
                </div>
              </div>
            </div>

            <div
              ref={ref2}
              className={`study-card study-card-right-one study-card-right-item transition-all duration-700 ease-out ${
                inView2
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-[-100%] lg:translate-x-100"
              } `}
              style={{
                transitionDelay: `${delay}ms`, // Aplica el retraso si se proporciona
              }}
            >
              <div className="study-card-content study-card-border-left study-card-radius-left">
                <div className="flex justify-between ">
                  <h3 className="study-card-content-title w-fit">
                    {t("studies.studyTitleTwo")}
                  </h3>
                  <a
                    href="https://www.udemy.com/certificate/UC-f1f23313-2191-4c23-927c-700ed9225684/"
                    target="_blank"
                    title={t('studies.titleCertificate')}
                    rel="noopener noreferrer"
                    className="h-12 w-12 certificate-container"
                  >
                    <img
                      className="w-9 lg:w-12 h-12 object-contain certificate-rolled cursor-pointer"
                      src={certificate_rolled}
                      alt="certificate rolled"
                    />
                    <img
                      className="w-12 object-contain certificate-open cursor-pointer"
                      src={certificate_open}
                      alt="certificate open"
                    />
                  </a>
                </div>
                <p className="study-card-content-time">Udemy</p>
                <div className="study-card-content-description">
                  <p>{t("studies.studyDescriptionTwo")}</p>
                </div>
              </div>
            </div>

            <div
              ref={ref3}
              className={`study-card study-card-left-two study-card-left-item transition-all duration-700 ease-out ${
                inView3
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-[-100%]"
              }`}
              style={{
                transitionDelay: `${delay}ms`, // Aplica el retraso si se proporciona
              }}
            >
              <div className="study-card-content study-card-border-right study-card-radius-right">
                <div className="flex items-center justify-between ">
                  <h3 className="study-card-content-title">
                    {t("studies.studyTitleThree")}
                  </h3>
                  <a
                    href="https://www.udemy.com/certificate/UC-e7e9fe4f-60c2-4097-9b33-df08682515eb/"
                    target="_blank"
                    title={t('studies.titleCertificate')}
                    rel="noopener noreferrer"
                    className="h-12 w-12 flex justify-end certificate-container"
                  >
                    <img
                      className="w-9 lg:w-12 h-12 object-contain certificate-rolled cursor-pointer"
                      src={certificate_rolled}
                      alt="certificate rolled"
                    />
                    <img
                      className="w-12 object-contain certificate-open cursor-pointer"
                      src={certificate_open}
                      alt="certificate open"
                    />
                  </a>
                </div>
                <p className="study-card-content-time">Udemy</p>
                <div className="study-card-content-description">
                  <p>{t("studies.studyDescriptionThree")}</p>
                </div>
              </div>
            </div>

            <div
              ref={ref}
              className={`study-card study-card-right-two study-card-right-item transition-all duration-700 ease-out ${
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-[-100%] lg:translate-x-100"
              } `}
              style={{
                transitionDelay: `${delay}ms`, // Aplica el retraso si se proporciona
              }}
            >
              <div className="study-card-content study-card-border-left study-card-radius-left">
                <div className="flex items-center justify-between ">
                  <h3 className="study-card-content-title">
                    {t("studies.studyTitleFour")}
                  </h3>
                  <a
                    href="https://www.udemy.com/certificate/UC-f9b10944-7326-49d8-8de8-8bcb7a94f539/"
                    target="_blank"
                    title={t('studies.titleCertificate')}
                    rel="noopener noreferrer"
                    className="h-12 w-12 flex justify-end certificate-container"
                  >
                    <img
                      className="w-9 lg:w-12 h-12 object-contain certificate-rolled cursor-pointer"
                      src={certificate_rolled}
                      alt="certificate rolled"
                    />
                    <img
                      className="w-12 object-contain certificate-open cursor-pointer"
                      src={certificate_open}
                      alt="certificate open"
                    />
                  </a>
                </div>
                <p className="study-card-content-time">Udemy</p>
                <div className="study-card-content-description">
                  <p>{t("studies.studyDescriptionFour")}</p>
                </div>
              </div>
            </div>

            <div
              ref={ref}
              className={`study-card study-card-left-three study-card-left-item transition-all duration-700 ease-out ${
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-[-100%]"
              }`}
              style={{
                transitionDelay: `${delay}ms`, // Aplica el retraso si se proporciona
              }}
            >
              <div className="study-card-content study-card-border-right study-card-radius-right">
                <div className="flex items-center justify-between ">
                  <h3 className="study-card-content-title">
                    {t("studies.studyTitleFive")}
                  </h3>
                  <a
                    href="https://www.udemy.com/certificate/UC-fe1d3be6-83b3-4a62-8559-e2c32d06fd91/"
                    target="_blank"
                    title={t('studies.titleCertificate')}
                    rel="noopener noreferrer"
                    className="h-12 w-12 flex justify-end certificate-container"
                  >
                    <img
                      className="w-9 lg:w-12 h-12 object-contain certificate-rolled cursor-pointer"
                      src={certificate_rolled}
                      alt="certificate rolled"
                    />
                    <img
                      className="w-12 object-contain certificate-open cursor-pointer"
                      src={certificate_open}
                      alt="certificate open"
                    />
                  </a>
                </div>
                <p className="study-card-content-time">Udemy</p>
                <div className="study-card-content-description">
                  <p>{t("studies.studyDescriptionFive")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudySection;
