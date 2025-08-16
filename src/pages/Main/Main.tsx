import Layout from "../../shared/components/Layout/Layout";
import Home from "./component/Home";
import About from "./component/About";
import SkillsSection from "./component/Skill";
import ExperienceSection from "./component/Resume";
import StudySection from "./component/Studies";
import ProjectSection from "./component/Projects";
import SocialMedia from "./component/SocialMedia";
import Footer from "../../shared/components/Layout/footer";
import ScrollRevealWrapper from "../../shared/components/Layout/ScrollRevealWrapper";

function Main() {
  return (
    <>
      <Layout />

      <div className="overflow-hidden">
        <ScrollRevealWrapper>
          <Home />
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <About />
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <SocialMedia />
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <SkillsSection />
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <ExperienceSection />
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <ProjectSection />
        </ScrollRevealWrapper>
        
        <ScrollRevealWrapper>
          <StudySection />
        </ScrollRevealWrapper>

        <Footer />
      </div>
    </>
  );
}

export default Main;
