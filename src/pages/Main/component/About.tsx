import "../../../App.css";
import "../styles/about.css";
import { FaLightbulb } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineShowChart } from "react-icons/md";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <article id="about" className=" w-full contain max-w-[1600px] mx-auto">
      <div className="text-center pb-8 lg:pb-16">
        <h2 className="text-4xl font-bold text-white t-shadow ">
          {t("about.title")}
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 flex justify-self-center"></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between">
        <div className="w-full text-2xl font-semibold text-blue-400 mb-4">
          <h2 className="text-lg lg:text-xl pb-5">{t("about.subtitle")}</h2>
          <p className="text-sm lg:text-lg font-medium text-gray-300 leading-relaxed tracking-wide pb-5">
            {t("about.description")}
          </p>
          <p className="text-sm lg:text-lg font-medium text-gray-300 leading-relaxed tracking-wide pb-5">
            {t("about.description2")}
          </p>
        </div>

        <div className="w-full flex flex-col gap-2">
          <div className="card flex">
            <div className="card-icon bg-[#23395c] text-blue-400">
              <FaLightbulb />
            </div>
            <div className="card-text">
              <h4 className="card-text-title">{t("about.creative")}</h4>
              <p className="card-text-description">
                {t("about.creativeDescription")}
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-icon bg-[#1b4546] text-green-400">
              <RiTeamFill />
            </div>
            <div className="card-text">
              <h4 className="card-text-title">{t("about.collaborative")}</h4>
              <p className="card-text-description">
               {t("about.collaborativeDescription")}
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-icon bg-[#33315c] text-purple-400">
              <MdOutlineShowChart />
            </div>
            <div className="card-text">
              <h4 className="card-text-title">{t("about.constant")}</h4>
              <p className="card-text-description">
                {t("about.constantDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default About;
